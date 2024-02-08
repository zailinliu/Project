package com.tp.dws.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.exception.InvalidRequestException;

	@Order(Ordered.HIGHEST_PRECEDENCE)
	@ControllerAdvice
	public class CustomExceptionHandler {
	    @ExceptionHandler(MethodArgumentNotValidException.class)
	    protected ResponseEntity<BaseResponse<Map<String, String>>> handleValidationExceptions(MethodArgumentNotValidException ex) {
	        Map<String, String> errors = new HashMap<String, String>();
	        ex.getBindingResult().getAllErrors().forEach(error -> {
	            String fieldName = ((FieldError) error).getField();
	            String errorMessage = error.getDefaultMessage();
	            errors.put(fieldName, errorMessage != null ? errorMessage
	                    : "No Exception Message");
	        });
	        return new ResponseEntity<>(new BaseResponse<>(
	                ResultCode.ERROR.name(),
	                errors,
	                ResultCode.ERROR.getMsg()
	        ), HttpStatus.BAD_REQUEST);
	    }

	    @ExceptionHandler(InvalidRequestException.class)
	    protected ResponseEntity<BaseResponse<Map<String, String>>> handleInvalidIdException(InvalidRequestException ex) {
	        Map<String, String> errors = Map.of(ex.getFieldName(),
	                (ex.getMessage() != null ? ex.getMessage() : "No Exception Message"));
	        return new ResponseEntity<>(new BaseResponse<>(
	                ResultCode.ERROR.name(),
	                errors,
	                ResultCode.ERROR.getMsg()
	        ), HttpStatus.BAD_REQUEST);
	    }

}
