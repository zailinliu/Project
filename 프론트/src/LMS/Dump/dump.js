// 생성 및 삭제 및 사용 및 테이블 보기
// drop database dws;
// create database dws;
// use dws;
// show tables;

// 권한 부여 및 유저와 권한 확인
// insert into role values ("ROLE_ADMIN");
// insert into role values ("ROLE_TEACHER");
// insert into role values ("ROLE_USER");
// select * from users;
// select * from role;

// select * from vods;

// show tables;
// select * from board;
// select * from user_role;
// select * from bookmark;
// select * from notice;

// 어드민 생성
// INSERT INTO user_role (id , role_name)
// value ('1','ROLE_ADMIN');

// 영상 삽입
// INSERT INTO vods (thumbnail, title, date, url, description)
// VALUES
// (
//     'https://blog.kakaocdn.net/dn/Kl0e8/btqCzADnGSi/fC7tMdoSp6oGS8L2K429V1/img.png',
//     '깃허브 기초개념',
//     '2024-01-08',
//     'https://www.youtube.com/watch?v=YFNQwo7iTNc&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=7',
//     'Github'
// ),
// (
//     'https://i.namu.wiki/i/UQ4Z4PUPCmqehhTE6taz1IZsu1v78BY5x2oGZAcPz0w36aZPQn5k4BDYHr0TKyQVZv75OwPTXeGpCIgSnvIy_g.svg',
//     '파이썬 강의',
//     '2024-01-08',
//     'https://www.youtube.com/watch?v=1-O4O0z4tRQ&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=10',
//     'python'
// ),
// (
//     'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-javascript-webfrontend.jpg',
//     '자바스크립트란?',
//     '2024-01-08',
//     'https://www.youtube.com/watch?v=NMHQkAS7XEc&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=23',
//     'Java script'
// ),
// (
//     'https://cdn.inflearn.com/public/courses/327598/cover/feec6bfd-abaa-4972-9c88-7dd13ed57c32/327598-eng.png',
//     '라이브러리와프레임워크',
//     '2024-01-08',
//     'https://www.youtube.com/watch?v=t9ccIykXTCM&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=24',
//     '라이브러리,프레임워크'
// ),
// (
//     'https://appmaster.io/api/_files/yKhnAuhLKWr9i83vVB3um7/download/',
//     'SQL vs NoSQL',
//     '2024-01-08',
//     'https://www.youtube.com/watch?v=Q_9cFgzZr8Q&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=39',
//     'SQL,NoSQL'
// ),
// (
//     'https://miro.medium.com/v2/resize:fit:700/0*PSxcvFBVaufSCuwt.png',
//     'Rest Api설계',
//     '2024-01-08',
//     'https://www.youtube.com/watch?v=4DxHX95Lq2U&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=41',
//     'Rest Api'
// ),
// (
//     'https://www.freecodecamp.org/news/content/images/2022/11/What-is.png',
//     'Node JS쉽게알기',
//     '2024-01-08',
//     'https://www.youtube.com/watch?v=h_t7ZT-nbIQ&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=55',
//     'Node JS'
// ),
// (
//     'https://i.ytimg.com/vi/sNMtjs_wQiE/sddefault.jpg',
//     'C,C#,C++ 차이점',
//     '2024-01-08',
//     'https://www.youtube.com/watch?v=zGrTT4k1-yc&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=1',
//     'C,C#,C++'
// ),
// (
//     'https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Favatars%2FkokoaThumbnail_h8OxaLt_WUzjUct.jpg&w=1920&q=75',
//     'KakaoTalk clone coding',
//     '2024-01-08',
//     'https://www.youtube.com/3e8a113d-1ee4-4a44-9ad8-f4da6fcfa99b',
//     'HTML, CSS, Github'
// ),
// (
//     'https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Favatars%2FytThumbnail_rtMv4Du.jpg&w=1080&q=75.jpg',
//     'YouTube Clone Coding',
//     '2024-01-08',
//     'https://www.youtube.com/3e8a113d-1ee4-4a44-9ad8-f4da6fcfa99b',
//     'YouTube backend + frontend + deployment'
// );

// 게시판 테스트용
// INSERT INTO board (title, author, text, category, create_at)
// VALUES ('테스트', '테스트', '테스트','2','2024-02-07'),
// ('테스트', '테스트', '테스트','2','2024-02-07');

// 아이디 무작위 생성
// INSERT INTO users (login_id, password, name, birth_Date, gender, email)
// VALUES
// ('test2', 'qqq111@@@', '1테스트', '2000-01-01', 'MAN', 'test2@naver.com'),
// ('test3', 'qqq111@@@', '2테스트', '2000-01-01', 'MAN', 'test3@naver.com'),
// ('test4', 'qqq111@@@', '3테스트', '2000-01-01', 'MAN', 'test4@naver.com'),
// ('test5', 'qqq111@@@', '4테스트', '2000-01-01', 'MAN', 'test5@naver.com'),
// ('test6', 'qqq111@@@', '5테스트', '2000-01-01', 'MAN', 'test6@naver.com'),
// ('test7', 'qqq111@@@', '6테스트', '2000-01-01', 'MAN', 'test7@naver.com'),
// ('test8', 'qqq111@@@', '7테스트', '2000-01-01', 'MAN', 'test8@naver.com'),
// ('test9', 'qqq111@@@', '8테스트', '2000-01-01', 'MAN', 'test9@naver.com'),
// ('test10', 'qqq111@@@', '9테스트', '2000-01-01', 'MAN', 'test10@naver.com');

// 포스트맨으로 보내는 방법
// {
//     "thumbnail":"https://blog.kakaocdn.net/dn/Kl0e8/btqCzADnGSi/fC7tMdoSp6oGS8L2K429V1/img.png",
//     "title": "깃허브 기초개념",
//     "date": "2024-01-08",
//     "url": "https://www.youtube.com/watch?v=YFNQwo7iTNc&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=7",
//     "description": "Github"
// }
// {
//     "thumbnail":"https://i.namu.wiki/i/UQ4Z4PUPCmqehhTE6taz1IZsu1v78BY5x2oGZAcPz0w36aZPQn5k4BDYHr0TKyQVZv75OwPTXeGpCIgSnvIy_g.svg",
//     "title": "파이썬 강의",
//     "date": "2024-01-08",
//     "url": "https://www.youtube.com/watch?v=1-O4O0z4tRQ&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=10",
//     "description": "python"
// }
// {
//     "thumbnail":"https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-javascript-webfrontend.jpg",
//     "title": "자바스크립트란?",
//     "date": "2024-01-08",
//     "url": "https://www.youtube.com/watch?v=NMHQkAS7XEc&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=23",
//     "description": "Java script"
// }
// {
//     "thumbnail":"https://cdn.inflearn.com/public/courses/327598/cover/feec6bfd-abaa-4972-9c88-7dd13ed57c32/327598-eng.png",
//     "title": "라이브러리와프레임워크",
//     "date": "2024-01-08",
//     "url": "https://www.youtube.com/watch?v=t9ccIykXTCM&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=24",
//     "description": "라이브러리,프레임워크"
// }
// {
//     "thumbnail":"https://appmaster.io/api/_files/yKhnAuhLKWr9i83vVB3um7/download/",
//     "title": "SQL vs NoSQL",
//     "date": "2024-01-08",
//     "url": "https://www.youtube.com/watch?v=Q_9cFgzZr8Q&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=39",
//     "description": "SQL,NoSQL"
// }
// {
//     "thumbnail":"https://miro.medium.com/v2/re                                                        size:fit:700/0*PSxcvFBVaufSCuwt.png",
//     "title": "Rest Api설계",
//     "date": "2024-01-08",
//     "url": "https://www.youtube.com/watch?v=4DxHX95Lq2U&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=41",
//     "description": "Rest Api"
// }
// {
//     "thumbnail":"https://www.freecodecamp.org/news/content/images/2022/11/What-is.png",
//     "title": "Node JS쉽게알기",
//     "date": "2024-01-08",
//     "url": "https://www.youtube.com/watch?v=h_t7ZT-nbIQ&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=55",
//     "description": "Node JS"
// }
// {
//     "thumbnail":"https://i.ytimg.com/vi/sNMtjs_wQiE/sddefault.jpg",
//     "title": "C,C#,C++ 차이점",
//     "date": "2024-01-08",
//     "url": "https://www.youtube.com/watch?v=zGrTT4k1-yc&list=PL7jH19IHhOLOgUL6VGH9kdAA_jZ1d18ZI&index=1",
//     "description": "C,C#,C++"
// }
