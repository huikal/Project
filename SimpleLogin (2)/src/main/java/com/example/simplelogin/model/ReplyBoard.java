package com.example.simplelogin.model;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model
 * fileName : ReplyBoard
 * author : kangtaegyung
 * date : 2023/06/21
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/06/21         kangtaegyung          최초 생성
 */
@Entity
@Table(name="TB_REPLY_BOARD")
@SequenceGenerator(
        name = "SQ_REPLY_BOARD_GENERATOR"
        , sequenceName = "SQ_REPLY_BOARD"
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
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_REPLY_BOARD SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE BID = ?")
public class ReplyBoard extends BaseTimeEntity {

//    게시판 번호
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_REPLY_BOARD_GENERATOR"
    )
    @Column
    private Integer bid;

    //    제목
    @Column
    private String boardTitle;

    //    본문
    @Column
    private String boardContent;

    //    작성자
    @Column
    private String boardWriter;

    //    이미지
    @Column
    private String boardImage;
    
    //    조회수
    @Column
    private Integer viewCnt;

    //    그룹 번호 : 댓글이 달리는 것들은 그룹번호가 같음
    @Column
    private Integer boardGroup;

    //    그룹 에서 자신의 부모 게시판번호
    @Column
    private Integer boardParent;

    @Column
    private String review ; // 내용
}
