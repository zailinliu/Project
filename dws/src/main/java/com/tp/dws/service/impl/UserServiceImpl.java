package com.tp.dws.service.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tp.dws.dto.UserLoginDto;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.util.SecurityUtil;
import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.UserDto;
import com.tp.dws.enumstatus.Gender;
import com.tp.dws.exception.InvalidRequestException;
import com.tp.dws.model.Role;
import com.tp.dws.model.User;
import com.tp.dws.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	@Autowired
	public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		super();
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}
	
	public BaseResponse<UserDto> signUp(UserDto userDto) {
		User user = userRepository.findByLoginId(userDto.getLoginId());
		
		
		Role role = new Role();

	    role.setRoleName("ROLE_USER");
	    
		
		user = new User();
		user.setId(null);
		user.setLoginId(userDto.getLoginId());
		user.setBirthDate(LocalDate.parse(userDto.getBirthDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd")));
		user.setEmail(userDto.getEmail());
		user.setGender(Gender.valueOf(userDto.getGender()));
		user.setName(userDto.getName());
		user.setPassword(passwordEncoder.encode(userDto.getPassword()));
		user.setRoles(Collections.singleton(role));
		user.setActivated(true);
		
		
		BaseResponse<UserDto> response = new BaseResponse<>();
		UserDto userData = UserDto.from(userRepository.save(user));
		response.setResultCode("SUCCESS");
		response.setData(userData);
		response.setMassage("가입이 완료되었습니다");
		
		return response;
	}
	
	public BaseResponse<Void> login(UserLoginDto userLoginDto) {
		User user = userRepository.findByLoginId(userLoginDto.getLoginId());
		if (user != null && 
			passwordEncoder.matches(userLoginDto.getPassword(), user.getPassword()))
			{
			
				return 	new BaseResponse<Void>(
						ResultCode.SUCCESS.name(),
						null,
						"로그인이 성공했습니다.");
			}
			else
			{
				throw new InvalidRequestException("false","로그인에 실패했습니다.");
			}
		}
	

    public UserDto getUserWithAuthorities(String loginId) {
        return UserDto.from(userRepository.findOneWithAuthoritiesByLoginId(loginId)
        		.orElseThrow(() -> new InvalidRequestException(loginId,"member not found")));
    }


    public UserDto getCurrentUserWithAuthorities() {
        return UserDto.from(
                SecurityUtil.getCurrentUsername()
                        .flatMap(userRepository::findOneWithAuthoritiesByLoginId)
                        .orElseThrow(() -> new InvalidRequestException("No current user","Current member not found"))
        );
    }
    
    public boolean checkIfIdExistsInDatabase(String id) {
        User user = userRepository.findByLoginId(id);
        return user != null;
    }

	public List<User> getAllUsers() {
		List<User> userList = userRepository.findAll();
		return userList;
	}

	public User getUserById(Long id) {
		System.out.println(id);
		Optional<User> user = userRepository.findById(id);
		if (user.isEmpty()) {
			return null;
		}else {
			return user.get();
		}
	}
	
}
