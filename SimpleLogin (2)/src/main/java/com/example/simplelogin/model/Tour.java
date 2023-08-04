package com.example.simplelogin.model;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model
 * fileName : Faq
 * author : 502
 * date : 2023-05-18
 * description : Faq 모델 객체
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-05-18         502          최초 생성
 */
@Entity
@Table(name="TB_TOUR")
@SequenceGenerator(
        name = "SQ_TOUR_GENERATOR"
        , sequenceName = "SQ_TOUR"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
// soft delete
// @Where : (clause ="자동으로추가할조건절") :자동으로 select 조건으로 추가함
@Where(clause = "DELETE_YN = 'N'")
// @SQLDelete : delete 실행 -> 대체해서 실행될 sql문을 지정
// 사용법) @SQLDelete(sql = "대체실행sql문")
@SQLDelete(sql = "UPDATE TB_TOUR SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE QNO = ?")
public class Tour extends BaseTimeEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_TOUR_GENERATOR"
    )
    @Column
    private Integer tid; // Faq 번호(시퀀스)

    @Column
    private String tname; // 제목

    @Column
    private String sights; // 내용

    @Column
    private String main; // 내용

    @Column
    private String sub1; // 내용

    @Column
    private String sub2; // 내용

    @Column
    private String start_date ; // 내용
    @Column
    private String end_date ; // 내용
    @Column
    private String reservation ; // 내용
    @Column
    private String address ; // 내용
    @Column
    private String phone ; // 내용
    @Column
    private String tagOne ; // 내용
    @Column
    private String tagSecond ; // 내용
    @Column
    private String fileName; // 이미지 파일명
    @Column
    private String fileType; // 이미지 파일타입(jpg, png 등)
    @Lob     //  @Lob : BLOB 데이터형으로 저장하는 기능
    @Column
    private byte[] fileData; // 실제 이미지(BLOB), 바이너리파일
    @Column
    private String price1 ; // 내용
    @Column
    private String price2 ; // 내용


}