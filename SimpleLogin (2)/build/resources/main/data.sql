

INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'https://drive.google.com/uc?export=view&id=1UkEyIjavwQ16w5-vAFjB4BUs2waECCSp','https://drive.google.com/uc?export=view&id=10fHu6Qk7BEiwQ_7TBRWDW5PBLYGYRXub','양양 바닷가를 따라 걷다','양양 여행, 바닷바람을 만끽할 수 있는 크레킹 코스','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'https://drive.google.com/uc?export=view&id=1kaIbJU1Al-_zRknCbumP02rB0zv1dJIV','https://drive.google.com/uc?export=view&id=1kFNsJmV0dmU3zfoA5k1aJQ4TFodG6S6l','한국의 작은 유럽 정읍','라벤더 정원과 스위스 마을을 품은 정읍 여행기','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'https://drive.google.com/uc?export=view&id=15ZJKTLXfgQEsp9aSBp-Xx0F26EGPfUMg','https://drive.google.com/uc?export=view&id=1Px-VOFb0sewAteA9_ja91wV3GGZDhXoe','더글로리 도깨비속 강릉','김은숙 작가가 사랑한 강릉의 아름다운 바다','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'https://drive.google.com/uc?export=view&id=1SnZQxMyfCCye7vYb1U5tz_eJPQ7AqP1N','https://drive.google.com/uc?export=view&id=1y3q9aFiolu1j00dB2V8kRjT1i6LoucgI','서울 제로슈거 디저트 카페 5선','열량은 줄이고 맛은 올린 서울의 디저트 카페','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'https://drive.google.com/uc?export=view&id=1c0CayXQWnzfVFuTjj0NtlDCQfdCAnZOc','https://drive.google.com/uc?export=view&id=1d7q-MqmJg3kgxJwuHM2fUTsiBMlmQJD9','지구별 여행자의 친환경 여행법','친환경 여행, 제로웨이스트','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'https://drive.google.com/uc?export=view&id=1BLie1d2ClkJDvrDRJJ1QCJtYe_TW2Gsd','https://drive.google.com/uc?export=view&id=10geT7DhGen4nLtx_hqhLKFNwYQ4uFcqx','정선 상유재로 떠나는 디지털 디톡스 여행','스마트폰은 잠시 안녕! 자연과 함께하는 정선','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'https://drive.google.com/uc?export=view&id=1Mf4Lw1AEWePbXlafNnY6jLqSIcBAeySm','https://drive.google.com/uc?export=view&id=1ygiEx2EPirwjjDL7Z_G37Z95v3SI7Z5O','효리네 민박''의 색다른 변신','감성 넘치는 제주 로컬 소품샵 소길별하 방문기','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'https://drive.google.com/uc?export=view&id=1qfGGKzTbj7IW9OI7HuHJTA8xqAAEqAW-','https://drive.google.com/uc?export=view&id=1CogeJqkYo65eRAPBie9ejgoYU_KvwAmg','여름나기 좋은 농촌마을 여행 7선','시원한 폭포와 함께하는 연천 여행','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);



INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '강촌-레일바이크 체험', '서울', '액티비티', '익스트림', '없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'y', 'Seoul' ,'010-111-1111','tag1-3','tag2-1','https://drive.google.com/uc?export=view&id=1ji5v_uahEIYGSkCakAjymAWrpHrrPx7J',NULL,NULL, 20000,10000,'N',TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '거제 파노라마 케이블카', '경남','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'y', 'Gyeongsang-do' ,'010-111-1111','tag1-3','tag2-3', 'https://drive.google.com/uc?export=view&id=1ZjAI8HAC_IaIVsiWlkLw3fLJytcX6Vo8','https://drive.google.com/uc?export=view&id=1WReWL5wJYDVYyMDqaiNMybQGxMifN18g',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '거제 파노라마 케이블카', '경남','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tag1-3','tag2-3', 'https://drive.google.com/uc?export=view&id=1ZjAI8HAC_IaIVsiWlkLw3fLJytcX6Vo8','https://drive.google.com/uc?export=view&id=1WReWL5wJYDVYyMDqaiNMybQGxMifN18g',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '남이성 가평탑랜드 번지점프', '경기','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'kyungki' ,'010-111-1111','tag1-3','tag2-4', 'https://drive.google.com/uc?export=view&id=143kXuWJXGpLPGhHaPUia1RkJaA9jkr7T',NULL,NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '단양 패러마을 패러글라이딩', '충북','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'chungcheong' ,'010-111-1111','tag1-3','tag2-4', 'https://drive.google.com/uc?export=view&id=1I2b-tBeEyJiFdsC3hS-zhjOZDlhdMtnj',NULL,NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '대유ATV수렵사격랜드 사격 체험 / ATV', '제주','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-3','tag2-4', 'https://drive.google.com/uc?export=view&id=1_G0aGRH-BV21-3kFUaj3hB5uVKpB1DHn','https://drive.google.com/uc?export=view&id=1Asepl1svEc51pvs4WBTIHmn1VQIn7m0W',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '라마다 여수 해상 짚트랙 + 여수 레일바이크', '전남','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla' ,'010-111-1111','tag1-3','tag2-3', 'https://drive.google.com/uc?export=view&id=1DT8cK2MUO7j7ZCrLxRMBMPDZ2sV9kH_h','https://drive.google.com/uc?export=view&id=1HVufp4OJ8cB5o2P-LUdhEKCbRlrtN4Tl',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '라마다 여수 해상 짚트랙', '전남','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla' ,'010-111-1111','tag1-3','tag2-3','https://drive.google.com/uc?export=view&id=1DT8cK2MUO7j7ZCrLxRMBMPDZ2sV9kH_h','https://drive.google.com/uc?export=view&id=1eaC0SxKRSN8fmO2C5ArGwuTKoNku9Slh',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '라프 라플라이&족욕', '제주','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-3','tag2-2', 'https://drive.google.com/uc?export=view&id=1JyQ1SvHHYjK21Qvl92iC4Cc26odIGtSg',NULL,NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '양평 패러글라이딩', '경기','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'kyungki' ,'010-111-1111','tag1-3','tag2-4', 'https://drive.google.com/uc?export=view&id=1IhUJewri8ApRvj0KCAeSHp5Tw2iSgZv0',NULL,NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '여수 해상 케이블카 + 엑스포카트', '전남','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla' ,'010-111-1111','tag1-3','tag2-3', 'https://drive.google.com/uc?export=view&id=1Ep-wwkw3rmrffE7z766nhMJfP-YErsHP','https://drive.google.com/uc?export=view&id=19wDUlOIUHjlQvhkrvow8bbcRa9mt0ZbB',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '윈드카트 1947', '제주','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-3','tag2-1', 'https://drive.google.com/uc?export=view&id=19utxLaaJ0MmyWviXtLH-oX4AHH60bMVJ','https://drive.google.com/uc?export=view&id=1HVufp4OJ8cB5o2P-LUdhEKCbRlrtN4Tl',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '전주 한옥 레일바이크 탑승권', '전북','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla-do' ,'010-111-1111','tag1-3','tag2-1', 'https://drive.google.com/uc?export=view&id=18euWH4QW7RtrCDFxVc0uGFDLCf8sZ7pu','https://drive.google.com/uc?export=view&id=1g7G4fzlnRIigawEpHfgYz9vHnsy-uaeo',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '제주 오프로드 ATV', '제주','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-3','tag2-4', 'https://drive.google.com/uc?export=view&id=18ajoUv5HLSpBZV8HCuHMecSk_v1lnBIB',NULL,NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '진도 명량해상케이블카 + 해남 포레스트수목원', '전남','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla' ,'010-111-1111','tag1-3','tag2-3', 'https://drive.google.com/uc?export=view&id=179Zzh8Y-pxIbqnF2xQUQG92xujvWn0BJ',NULL,NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '춘천 레일바이크 체험', '강원','액티비티','익스트림','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Kangwon' ,'010-111-1111','tag1-3','tag2-4', 'https://drive.google.com/uc?export=view&id=1rpB6YcYD-NPOf6Gt_XQaxPShD1aJVF52','https://drive.google.com/uc?export=view&id=1w2wsTN8pcTds8z9yLWBHBMJQTqGz1111',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);


INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '998서프 삼양 이용권', '제주','액티비티','수상레져','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'jeju' ,'010-111-1111','tag1-1','tag2-3','https://drive.google.com/uc?export=view&id=1TTjO2aFxIWZyzxPpDEJPU9Om5cHM7AF','https://drive.google.com/uc?export=view&id=129YMm8TBSZb9rEl0CkZyofj9Eg_KGrL3',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '동강 어라연 래프팅 체험', '강원','액티비티','수상레져','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Kangwon' ,'010-111-1111','tag1-1','tag2-3','https://drive.google.com/uc?export=view&id=1xb2uezqSdw3i5-BJwEXoFwgy_mkv72cT',NULL,NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '버블디 스쿠버다이빙 비치/보트 체험 (자격증 없이 가능)', '제주','액티비티','수상레져','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'jeju' ,'010-111-1111','tag1-1','tag2-3','https://drive.google.com/uc?export=view&id=1QB9F041pco473drM4mXyQ2JgCsDiIRsi',NULL,NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '서귀포잠수함 탑승권', '제주','액티비티','수상레져','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'jeju' ,'010-111-1111','tag1-4','tag2-3','https://drive.google.com/uc?export=view&id=1mCcPZAobQLEx6iirXhHvkV3iub8a2WOh','https://drive.google.com/uc?export=view&id=125iVYnFqi3tFoNK_nbqaOrUqkJ4q-jVq',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '아그리나 요트투어', '전남','액티비티','수상레져','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla' ,'010-111-1111','tag1-1','tag2-3','https://drive.google.com/uc?export=view&id=1QcYyBfJpZxzbws1zG56n089J2nGEECcd',NULL,NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '울릉도 학포해변 학포다이버리조트 보트투어', '경북','액티비티','수상레져','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tag1-1','tag2-3','https://drive.google.com/uc?export=view&id=1W1PC8ng5iI10_d7CIsmUQ5Hb0DbL-RD9',NULL,NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '울릉도 학포해변 학포다이버리조트 스노클링 대여', '경북','액티비티','수상레져','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tag1-1','tag2-3',' https://drive.google.com/uc?export=view&id=1QHH5ksAsRBsi4ybb3WAOM_tkNuGPGBJS',NULL,NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '제주 퍼시픽 마리나 요트투어 이용권', '제주','액티비티','수상레져','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'jeju' ,'010-111-1111','tag1-4','tag2-3','https://drive.google.com/uc?export=view&id=1oq2HOQQUDgYXhMZPWVcE9n37sTNcixOT',NULL,NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '춘천 소양강 상고대 일출 / 일몰 카누 체험', '강원','액티비티','수상레져','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Kangwon' ,'010-111-1111','tag1-1','tag2-3','https://drive.google.com/uc?export=view&id=1a_u-3lbf2jJqmlJ8Cvg_UNwdLxdTxjYw',NULL,NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '프리다이빙 체험', '제주','액티비티','수상레져','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'jeju' ,'010-111-1111','tag1-1','tag2-3','https://drive.google.com/uc?export=view&id=13yH3CNWcv7E5dYIqoeQ2N9w3wqdxZZcq',NULL,NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);


INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, ' 서울랜드 종일 자유이용권', '서울','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'seoul' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1Ew0m7xjWVmS1F62p_fAl37BrVbHL7E0b','https://drive.google.com/uc?export=view&id=1o-hkgw7HrvKQhOb_S6-vb3wnQTQHKS7T',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '경기도 에버랜드 프리티켓팅', '경기','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'kyungki' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=12cJuIdu1u66I7nGs98FaByy37jAiKKyb','https://drive.google.com/uc?export=view&id=1-L7svZJ65Ja1FkTbK1yEgMn09GYnZpLJ',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '곤지암 리조트 스파라스파', '경기','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'gyeonggi-do' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1JRuZPD6XHDM--CzhTQhRA7TsU82yy-Rn','https://drive.google.com/uc?export=view&id=1Ck4nQxXCf0m6Y04JhvTo334ayTDolBVF',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '김해 롯데워터파크 하이시즌 종일권', '경남','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1ARpopPUg_8k88R-e7hI9D62NwzHUJ4ex','https://drive.google.com/uc?export=view&id=1Xj7qn1Qu6r2zbucSV_rK5iwk84nPciPS',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '남이섬 입장권(QR 코드 바로 입장)', '강원','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'kyungki' ,'010-111-1111','tag1-4','tag2-5','https://drive.google.com/uc?export=view&id=1yvZ6HeVNtYEU2oRAndBX_Jvfbx9SWSWY','https://drive.google.com/uc?export=view&id=1Gw5S1ae_WWBOSPVJyw7ihr66wtLOXegj0',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '대구 이월드 자유이용권', '대구','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Deagu' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1hNVWmjT1K63O2alFC8Ge4SrP3SjKePI-','https://drive.google.com/uc?export=view&id=1gqjS0Qllqvs4CDbbCDZ9xF4nF0SB-5rd',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '롯데월드 별밤 나이트 아쿠아리움 입장권', '서울','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Seoul' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1vcRs2AR3bcphjLi1TPFURjprh2xUEcIK','https://drive.google.com/uc?export=view&id=1D9AVPYi0VVZwZWYA3DFquHRGvMjSLt7r',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '롯데월드 아쿠아리움 입장권', '서울','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Seoul' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1y7EHS8FBv99LeQfsQaJQT0wYvxh7jOfC','https://drive.google.com/uc?export=view&id=1G9cSlD6OtpVXOqZScVpUwOUzJIi7coHF',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '롯데월드 아쿠아리움 입장권+포토 패키지', '서울','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Seoul' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=13n6ut182lSgEW3pvVBhPfbii9QgJVjiy','https://drive.google.com/uc?export=view&id=1-L7svZJ65Ja1FkTbK1yEgMn09GYnZpLJ',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '롯데월드 종합이용권 다인권 + 인생네컷 PKG', '서울','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Seoul' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1mUKfr2a5FnwTbFkAWUp0OFF5Sng9Qqqn','https://drive.google.com/uc?export=view&id=17VxFohblRFJB1hFy1RJ2xh9zn7KjPAl8',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '베니스랜드 이용권', '제주','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1U-4gbJGr2wSkPJqv0xe3iCy5T0NP3eXi','https://drive.google.com/uc?export=view&id=17GkW2qr6x3CXQf0XFaaxfXnoSZk1CtWw',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '뽀로로 & 타요 테마파크 입장권', '제주','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1yvBG68CHBM6YQOzZYHs-pJEKJk7AdeOo','https://drive.google.com/uc?export=view&id=1iKCEdY5zh15zSuITvB6xZre1YRcn5Etu',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '서울랜드 AFTER6 야간 자유이용권', '서울','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'seoul' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=112QiAlCVhmTuJwN0Aya5J12AoFPYO8JW','https://drive.google.com/uc?export=view&id=13rxAzPUHPEFEmhxpfQ7cPZsZ-x1Uvcc5',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '서울랜드 어린이 종일권', '서울','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'seoul' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1Ew0m7xjWVmS1F62p_fAl37BrVbHL7E0b','https://drive.google.com/uc?export=view&id=1Syw9RWE_EeVV0sP405AxgbmIMCT8aB1D',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '서울스카이+롯데월드 아쿠아리움 입장권', '서울','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Seoul' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1bxmTbzS-8RKgm-fAqDp2mSoLtpGhltJ1','https://drive.google.com/uc?export=view&id=1WYv-R513RQ-ZOlnckU2dsSbTPZLBF9vY',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '수목원테마파크 & 아이스뮤지엄 입장권', '제주','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=12QcJGKK6vIPOQO3j0V0-Df7YNUI5e4Vl','https://drive.google.com/uc?export=view&id=1f1zyJMFG-6RDbOmzkl7slnih_TdGjrtz',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '아쿠아플라넷 광교 입장권', '경기','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'gyeonggi-do' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1ZwHFj3u1mAMzbEOd2KIxc__hkNRW6YhO','https://drive.google.com/uc?export=view&id=1Q5hmXqpSS3PEaqnFQTANCDpYkYzvZGgy',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '아쿠아플라넷 여수 입장권', '전남','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla-do' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1-7S9wdpuhcCeZG1oH48PAMchSNYKhXGe','https://drive.google.com/uc?export=view&id=1dk-1oT5KBvVBc6Md0zhzldN4M6luTdww',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '아쿠아플라넷 일산 입장권', '경기','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1znJ5bnImSSKkFZyO9gW9EYJbD-0oMNMm','https://drive.google.com/uc?export=view&id=1E6xNMywpOMW0QKtv2lmn4ZPRCtTf4Mwl',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '아쿠아플라넷 제주 오후권', '제주','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-2','tag2-5','https://drive.google.com/uc?export=view&id=1cUYp0xZFcfb_h-UH_Uuth4dFOVuN6Ipy','https://drive.google.com/uc?export=view&id=1I9Jz1SEULtzr9adShMFq51BT0awKNNAw',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '아쿠아플라넷 제주 종합권', '제주','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1LcNPr1TeO0Dk6k40bYaB7cDfiBtZustz','https://drive.google.com/uc?export=view&id=1L6Tv_tN_h-bA5RTkI9V3OcWv_zY-hwDh',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '아쿠아플라넷63입장권', '서울','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Seoul' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1Om7ofSD2vxLSYN_CvbnuBWt9EjYWQw_Q','https://drive.google.com/uc?export=view&id=1kfgJ0fD02TVB7ctIHz6graqueKv8160Z',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '알펜시아 오션700 춘계시즌 종일권', '강원','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gangwon-do' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1kpcOCsp4Nkl6375PXJVIlMKBDXNCgXK8','https://drive.google.com/uc?export=view&id=11gkZ1WIgEeoJJj49a9VHiaUA4LmESOA8',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '오션월드 비발디 워터파크 하이1시즌 입장권', '강원','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1DAH_o7gRz18jHIxN2TS418HaFPRA4rFW','https://drive.google.com/uc?export=view&id=1BYDyPPkErYcDI3Ez8-mvJ6ifYCIerWo5',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '원마운트 무제한 시즌권', '경기','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'gyeonggi-do' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1sfXqLydd70YtW5HT2OmFvBLAE37w9q_z','https://drive.google.com/uc?export=view&id=1_50jU_IgV-asIrz1s5CL2iV9gEr838J6',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '원마운트 워터파크 다인권(가족권/바비큐PKG)', '경기','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'gyeonggi-do' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1IOJ09vtfdDIf6exF36MOG6B0evK33YMp','https://drive.google.com/uc?export=view&id=1_50jU_IgV-asIrz1s5CL2iV9gEr838J6',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '원마운트 워터파크 종일권', '경기','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'gyeonggi-do' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1C-zXj8yfPcNt3xvk9zFHvjzPtUXZCE37','https://drive.google.com/uc?export=view&id=1_50jU_IgV-asIrz1s5CL2iV9gEr838J6',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '코엑스 아쿠아리움 입장권', '서울','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Seoul' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1mgtjS8hcfTpJOF41MClfODtHyK5RyTii','https://drive.google.com/uc?export=view&id=1Kg5B3k5FTUs4jlBHtl0sI0LtH75cyENk',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '파라다이스 스파 도고 이용권', '충남','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Chungcheong-do' ,'010-111-1111','tag1-2','tag2-1','https://drive.google.com/uc?export=view&id=1JY4-kOdF-618vfZqSWIheTLAZi1jpepp','https://drive.google.com/uc?export=view&id=1cgrEFLbymx3mWetDlbEv2Txv79s2Dxnc',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '한국민속촌 자유이용권', '경기','액티비티','테마파크','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'kyungki' ,'010-111-1111','tag1-2','tag2-2','https://drive.google.com/uc?export=view&id=1Zhed3noaJIMJSQgQemaOkcRcbLPZwDj-','https://drive.google.com/uc?export=view&id=16cK5gyTl_0UH0cq5vNOFjmFM0JwZ2HP5',NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);



INSERT INTO TB_TOUR
VALUES (SQ_TOUR.NEXTVAL, '제주 아리랑혼 태권마샬아트 공연', '제주', '액티비티', '문화', '없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111', 'NULL', 'Null', 'https://drive.google.com/uc?export=view&id=13qBrp85xL8DBRb2N0LareAEcrDm7mhml','https://drive.google.com/uc?export=view&id=1XrahM6tBmPjkcFUybyyFWqbrb-ERhG6f',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR
VALUES (SQ_TOUR.NEXTVAL, '그리스신화박물관&트릭아이뮤지엄', '제주', '액티비티', '문화', '없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111', 'NULL', 'Null', 'https://drive.google.com/uc?export=view&id=1jyburCZ-HC4v6l8BmUOcA3gVnlr376_L','https://drive.google.com/uc?export=view&id=1IdBuZuSJMAj5IlrVcpJsiaT9zgcUVXI4',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR
VALUES (SQ_TOUR.NEXTVAL, '조수미&베를린 필 12', '제주', '액티비티', '문화', '없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Pusan' ,'010-111-1111', 'tag1-5', 'tag2-1', 'https://drive.google.com/uc?export=view&id=113e_0aSJXca_d54VvV4Ms23rEJoxDPjw','https://drive.google.com/uc?export=view&id=1jm5z4z9SHyRUGK-K18k6GJanM6x-HtHa',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR
VALUES (SQ_TOUR.NEXTVAL, '부산현대미술관 정체성과 디자인', '부산', '액티비티', '문화', '없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Pusan' ,'010-111-1111', 'tag1-5', 'tag2-1', 'https://drive.google.com/uc?export=view&id=1xSp5w9LHQcDUcV7UfR58VK2IIrP4gJ2o','https://drive.google.com/uc?export=view&id=1jxUCP9GJZiJ6CkDBSmdPH_tiAg4HV6qM',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR
VALUES (SQ_TOUR.NEXTVAL, '연극 [완벽한커튼콜]', '부산', '액티비티', '문화', '없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'Y', 'Pusan' ,'010-111-1111', 'tag1-5', 'tag2-1', 'https://drive.google.com/uc?export=view&id=1gREloHMZoin_TKYiCf9fEMo0wFxoeHg7','https://drive.google.com/uc?export=view&id=1PHpHcNDI67cMT0XEn5fBbG5zHK4J4muV',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR
VALUES (SQ_TOUR.NEXTVAL, '뮤지컬 〈오페라의 유령〉', '서울', '액티비티', '문화', '없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Seoul' ,'010-111-1111', 'tag1-5', 'tag2-1', 'https://drive.google.com/uc?export=view&id=1m-qRYKTeZUe6n3sRjvuv7ucJ4phBa25b','https://drive.google.com/uc?export=view&id=1ngX8Cw5P8xRv1n0MFDObfef8ZZndNNpA',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR
VALUES (SQ_TOUR.NEXTVAL, '돈의문박물관마을', '서울', '액티비티', '문화', '없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Seoul' ,'010-111-1111', 'tag1-5', 'tag2-1', 'https://drive.google.com/uc?export=view&id=1wjMis3oHPyRSr_JbxxQCZGjiIcP1FuvS','https://drive.google.com/uc?export=view&id=1JBDMAndT3eYSNSSbATZiPk7QqPX8KfmF',NULL, 20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '광주시민의 숲 야영장', '전남','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1b5desjSlbHUlov9i4FPN241WzNM0-1Zc','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '금호강 오토캠핑장', '대구','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Daegu' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1TIv6e7apkYCEIw44UUAfylXULjmTwd_3','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '인삼골오토캠핑장', '충남','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Chungcheong-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1LxAryhmnymVlF4IxNnlPj47Z-f-7iJsT','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '회산백련지 오토캠핑장', '전남','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1mZ4pPo1L3oFbntV3e67OcPcBpU4kHAX4','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '감성 차박 캠핑세트 대여 서비스', '제주','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-2','tag2-5','https://drive.google.com/uc?export=view&id=1-l20subXISe0HBMc66DYdKCUeIbjk28P','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '국립화천 숲속야영장', '강원','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gangwon-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=12GlhNgMS4WoLg-y-al50S0dyiXhJiC9s','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '금오도 야영장', '전남','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla-do' ,'010-111-1111','tag1-2','tag2-5','https://drive.google.com/uc?export=view&id=1VRzlc-QzZ9f9m0cPM3JmQNgZrmiUPkT5','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '남원 백두대간 국민여가캠핑장', '전북','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1-Gqr_puy7MUm_BEbsPfdCqzdNEvVLqBN','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '동강전망휴양림오토캠핑장', '강원','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gangwon-do' ,'010-111-1111','tag1-2','tag2-2','https://drive.google.com/uc?export=view&id=1V25EMA1qqzcZro4ap1IRoZI8P0uxO1Wc','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '등억알프스야영장', '울산','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Ulsan' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=104rM9DhALEFPcwCgKLU5nfEOJkhFP7JF','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '백양사 가인야영장', '전남','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1PNzq32k4h1IRcL9VpkFYgLyrwJWSwsN1','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '변산반도국립공원 고사포 야영장', '전북','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1FRuwNLpIUWGhqhT4OhZLphmICL9xxjJq','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '사천비토솔섬오토캠핑장', '경남','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1GMWJ2gWSRNzOtmv1yveY5l1MukFKw0YK','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '수도권매립지 캠핑장', '인천','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Incheon' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1uQTdcyqSBhxKa-I1Ue_Mu7CtXh4k-rg2','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '양양 포레스트캠핑장', '강원','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gangwon-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1REOcktPH-ApijDMkJilrp93LWM0yP4Ll','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '영덕 고래불 국민 야영장', '경북','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tag1-2','tag2-3','https://drive.google.com/uc?export=view&id=15sStcRnvMVqF2G5XhX2LYiIgPQ504KLn','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '오시아노 오토캠핑리조트', '전남','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeolla-do' ,'010-111-1111','tag1-2','tag2-3','https://drive.google.com/uc?export=view&id=1BHMJad8QwCupWGOfezRKs1GH5lB-4w7u','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '장경리해변 야영장', '인천','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Incheon' ,'010-111-1111','tag1-2','tag2-3','https://drive.google.com/uc?export=view&id=1tbUXPv53tjGcwwu8p2SinWZPbp9MLPj9','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '장호비치캠핑장', '강원','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gangwon-do' ,'010-111-1111','tag1-2','tag2-3','https://drive.google.com/uc?export=view&id=1weuSb7QNwwRXlcwcsAL1BFlux4e0qWRW','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '장호비치캠핑장', '강원','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gangwon-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1m5Rzx-H1n0CMj4Pg6amb1mnejsFHSR3V','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '제주생태관광 이용권', '제주','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Jeju' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=12RQ-ZiamPcIgKtJUQ36k-8dZoHd4s0iw','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '통제영오토캠핑장', '경남','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tag1-2','tag2-5','https://drive.google.com/uc?export=view&id=1EcWjCo1miUUyYoJlfAOnjQDFQ8hOb2KX','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '학동자동차 야영장', '경남','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tag1-2','tag2-3','https://drive.google.com/uc?export=view&id=1ChtAofIx1mqh6m34U2_63pvGUdZgDJot','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '학암포오토캠핑장', '충북','숙박','캠핑','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Chungcheong-do' ,'010-111-1111','tag1-2','tag2-3','https://drive.google.com/uc?export=view&id=1zo4kkqF0uE8XCNWJ46LKeaD5qzuESUJm','https://drive.google.com/uc?export=view&id=1VkPW3fOVv1R06ZB6kA5sfgCWgEmKC_-P', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);


INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '교육열차', '충북','교통','열차','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tagNULL','tagNULL','https://drive.google.com/uc?export=view&id=1adMIAWX4_-O5NaXAjema6BO0SDPYZ8F3','https://drive.google.com/uc?export=view&id=13AZ_KdU4VJJjLZXo4SNz1wYeK33GNk6m', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '국악와인열차', '충북','교통','열차','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tagNULL','tagNULL','https://drive.google.com/uc?export=view&id=1JqGiJUd129bNyEUd_Ss3vepAFr7HHtnU','https://drive.google.com/uc?export=view&id=10NxcMpdR1fepWY_Rr3eU7744kNsxeHFA', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '남도해양열차', '전남','교통','열차','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tagNULL','tagNULL','https://drive.google.com/uc?export=view&id=16GrIDZ0x3ClH29h8ZGQy0bJXPIU4y0n9','https://drive.google.com/uc?export=view&id=13AZ_KdU4VJJjLZXo4SNz1wYeK33GNk6m', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '동해산타열차', '경북','교통','열차','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tag1-2','tag2-4','https://drive.google.com/uc?export=view&id=1C6ay3sYpvvmx1yEwpUjFTOkRm-zlbPRn','https://drive.google.com/uc?export=view&id=10NxcMpdR1fepWY_Rr3eU7744kNsxeHFA', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '바다열차', '충북','교통','열차','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tagNULL','tagNULL','https://drive.google.com/uc?export=view&id=1dFzmAxHFDZdPJ_0kcodWq-EML44yP3w1','https://drive.google.com/uc?export=view&id=13AZ_KdU4VJJjLZXo4SNz1wYeK33GNk6m', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '백두대간협곡열차', '경북','교통','열차','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tagNULL','tagNULL','https://drive.google.com/uc?export=view&id=17i0Wg9yJWa3yGpDSZcWVQ9ybiwis_equ','https://drive.google.com/uc?export=view&id=10NxcMpdR1fepWY_Rr3eU7744kNsxeHFA', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '서해금빛열차', '충북','교통','열차','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tagNULL','tagNULL','https://drive.google.com/uc?export=view&id=1W03q065GuaOv1G-K_xNBDpIGV3TD0eDQ','https://drive.google.com/uc?export=view&id=13AZ_KdU4VJJjLZXo4SNz1wYeK33GNk6m', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '에코레일열차', '충북','교통','열차','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tagNULL','tagNULL',' https://drive.google.com/uc?export=view&id=1UqFLKyk07O4vfB3HKFgpb4rcFdAK8TXB','https://drive.google.com/uc?export=view&id=10NxcMpdR1fepWY_Rr3eU7744kNsxeHFA', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '정선아리랑열차', '충북','교통','열차','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tagNULL','tagNULL','https://drive.google.com/uc?export=view&id=16yp5LNN6FYvMEQyBdmvP6Gldm1TM0urt','https://drive.google.com/uc?export=view&id=13AZ_KdU4VJJjLZXo4SNz1wYeK33GNk6m', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_TOUR VALUES (SQ_TOUR.NEXTVAL, '팔도장터열차', '충북','교통','열차','없음', '2023-07-20 15:00:00', '2023-07-23 20:00:00', 'N', 'Gyeongsang-do' ,'010-111-1111','tagNULL','tagNULL','https://drive.google.com/uc?export=view&id=1Ws4hJIyfMVx5edHrClS633-Th6aYmHb1','https://drive.google.com/uc?export=view&id=10NxcMpdR1fepWY_Rr3eU7744kNsxeHFA', NULL,20000,10000,'N' ,TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);



-- 답변형 게시판 테스트
-- 1
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '경주 최고급 호텔 후기', '경주에 이런 최고급 호텔이 있는줄 몰랐습니다. 매달마다 오고싶어요 ㅜ_ㅜ', '작성자','https://drive.google.com/uc?export=view&id=1zrWrGmaS_gushQNJgXhaOJTb3O008EM8', 0, 1, 0, 'Y','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

-- 2
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '여수 밤바다 아름답다', '호캉스 그자체,, 너무 좋습니다 ! 밤바다 하면 역시 여수 아니겠습니까,,, 이 풀빌라는 여수밤바다가 진짜 이뻐요', '작성자','https://drive.google.com/uc?export=view&id=1L5s9FK287sn1-NbELr01CFklD2spSiMs', 0, 2, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

-- 3
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '강원도 고요한 팬션', '잘보여서 너무 좋습니다 별도 짱 잘보여요 ! 한적하니 너무 제 취향이네요. 평일에 사람들한테 치이느라 정신없었는데 여행내내 너무 고요하고 좋았습니다 완전 힐링 !', '작성자','https://drive.google.com/uc?export=view&id=1y-o_jWX09zi_GSRFNPUsELOmTwGH5SnC', 0, 3, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

-- 4
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '워터파크 짱 재밌다.', '와 여기 워터파크는 이때까지 가본 워터파크랑 다르네요 다른데는 물이 더럽고 찝찝하고 그런데 여기는 물관리를 엄청 잘하나봐요 짱짱', '작성자','https://drive.google.com/uc?export=view&id=1IcRTidba7FsX5nJde-8U0cQZdzUelpe-', 0, 4, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

-- 5
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '밀양 캠핑 저렴한 가격.', '말 그대로 정말 힐링캠프 여태 갔던곳 중에 제일 좋았던곳,,, 편의 시설은 감안하고가기!', '작성자','https://drive.google.com/uc?export=view&id=1mZFpDuh6M5GOF6C2q80uGpH8dCxGi552', 0, 5, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 6
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '해운대 내부 워터파크.', '인피니티 풀에서 부산 바다를 배경으로 인생샷 찍고 워터 슬라이드를 타며 물놀이를 즐길수 있어요 !', '작성자','https://drive.google.com/uc?export=view&id=1pjphZRKbR97F6rTv7H_0q1QkdQT8msu0', 0, 6, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 7
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '서울 에버랜드 후기', '거품멍전도 관람하고 에버랜드에서 즐거운 시간을 보내고 왔습니다.', '작성자','https://drive.google.com/uc?export=view&id=1LyG2lQU7z-EAdFgubd9yURamVgOVBTxy', 0, 7, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 8
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '제주도 황우지 해안', '자연이 선물한 천연 풀장으로 유명한 항우지 해안에 선녀탕입니다 ! 자연적으로 만들어진 곳이라니 너무너무 멋져요 !"', '작성자','https://drive.google.com/uc?export=view&id=1SoqjXrXEiEIVgA87RcD9yhW1DFCibxq4', 0, 8, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 9
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '강원 삼척 장호항', '물이 정말 맑아서 물고기 다보이고 바닷물이라 짜지만 ㅜㅜ 각종 물고기 많이보여서 외국 안가도되요 ^^', '작성자','https://drive.google.com/uc?export=view&id=1Uu3oiK6ak3keWl887c1HBmrR2ldEjZuu', 0, 9, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 10
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '경기 시흥 웨이브파크', '여기는 바다에 있는 해수욕장 느낌으로 저 안쪽으로 갈수록 깊어지니, 수영에 자신있다면 끝까지 가보세요 !', '작성자','https://drive.google.com/uc?export=view&id=1-sgBkqHy7cddfYn7gtuewuxIcOaqdPlM', 0, 10, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 11
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '인제 내린천 계곡', '오래간만에 많이 웃고 행복했던 강원도 인제 내린천 인근 계곡에서 보낸 지난 주말 캠핑아쉬움이 이제 반이 남았어요.', '작성자','https://drive.google.com/uc?export=view&id=1GgAVEd_M0nOc8cIet2Ihr_wQbNe8OvIA', 0, 11, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
-- 12
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '포항 이가리 닻 전망대', '이가리닻전망대에서 보는 바다 물도 깨끗해서 물속까지 다 보인다.', '작성자','https://drive.google.com/uc?export=view&id=1nP4v33pd55dVo_Q5P16AHGkmT6AuUp5F', 0, 12, 0, 'N','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);

-- ROLE_USER : 1
INSERT INTO TB_ROLE(id, name) VALUES(SQ_ROLE.NEXTVAL, 'ROLE_USER');
-- INSERT INTO TB_ROLE(id, name) VALUES(SQ_ROLE.NEXTVAL, 'ROLE_MODERATOR');
-- ROLE_ADMIN : 2
INSERT INTO TB_ROLE(id, name) VALUES(SQ_ROLE.NEXTVAL, 'ROLE_ADMIN');

-- admin user 1명 최초 생성
-- id : forbob
-- password : 123456
-- email : forbob@naver.com
-- roles : ROLE_ADMIN
INSERT INTO TB_USER VALUES(SQ_USER.NEXTVAL, 'forbob@naver.com', '관리자','admin', '$2a$10$TG1a5ywSrGNgf7/fFH.m0.EdTzHax8AGYNeAr8aIseF3DKyO0lDti', 'forbob','01012345678', '부산');
INSERT INTO TB_USER_ROLE VALUES(1, 2);

INSERT INTO TB_USER VALUES(SQ_USER.NEXTVAL,'yoo2574@naver.com','유저다', 'nickname', '$2a$10$TG1a5ywSrGNgf7/fFH.m0.EdTzHax8AGYNeAr8aIseF3DKyO0lDti', 'yoo2574', '01012345674', '부산');
INSERT INTO TB_USER_ROLE VALUES(2, 1);

COMMIT;