package com.example.simplelogin.repository;

import com.example.simplelogin.dto.reply.ReplyBoardDto;
import com.example.simplelogin.model.ReplyBoard;
import com.example.simplelogin.model.Tour;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * packageName : com.example.simpledms.repository
 * fileName : ReplyBoardRepository
 * author : kangtaegyung
 * date : 2023/06/21
 * description : 답변형 게시판 레포지토리
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/06/21         kangtaegyung          최초 생성
 */
@Repository
public interface ReplyBoardRepository extends JpaRepository<ReplyBoard, Integer> {

    // 계층형 쿼리
//     Connect by =============================================================================
    @Query(value = "SELECT BID                     AS bid " +
            "      , LPAD('⤵', (LEVEL-1))|| board_title AS BoardTitle " +
            "      , BOARD_CONTENT          AS boardContent " +
            "    ,BOARD_WRITER              AS boardWriter " +
            "    ,BOARD_IMAGE              AS boardImage " +
            "    ,VIEW_CNT                  AS viewCnt " +
            "    ,Board_group               AS boardGroup " +
            "    ,BOARD_PARENT              AS boardParent " + //부모 개시판 번호.
            "    ,REVIEW_YN              AS reviewyn " + //부모 개시판 번호.
            "FROM TB_REPLY_BOARD " +
            "WHERE BOARD_TITLE LIKE %:boardTitle% " +
            "AND   DELETE_YN = 'N' " +
            "START WITH BOARD_PARENT = 0 " + //부모 개시판 번호가 없으면 0
            "CONNECT BY BOARD_PARENT = PRIOR BID " + //부모 개시판 번호가 있으면 승계
            "ORDER SIBLINGS BY BOARD_GROUP DESC " //부모 개시물 번화 =>
            , countQuery = "SELECT count(*) FROM TB_REPLY_BOARD " +
            "WHERE BOARD_TITLE LIKE %:boardTitle% " +
            "AND   DELETE_YN = 'N' " +
            "START WITH BOARD_PARENT = 0 " +
            "CONNECT BY BOARD_PARENT = PRIOR BID " +
            "ORDER SIBLINGS BY BOARD_GROUP DESC "
            , nativeQuery = true)
    Page<ReplyBoardDto> selectByConnectByPage(
            @Param("boardTitle") String boardTitle,
            Pageable pageable
    );

    //    insert 쿼리
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO TB_REPLY_BOARD " +
            "VALUES (SQ_REPLY_BOARD.nextval, :#{#replyBoard.boardTitle}, " +
            ":#{#replyBoard.boardContent}, " +
            ":#{#replyBoard.boardWriter}, " +
            ":#{#replyBoard.boardImage}, " +
            "0, SQ_REPLY_BOARD.currval, 0,'Y','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL) "
            , nativeQuery = true
    )
    int insertByBoard(@Param("replyBoard") ReplyBoard replyBoard);

    //    BoardGroup 있는지 조사
    boolean existsAllByBoardGroup(int BoardGroup);

    //    게시물 삭제 : 자식도 같이 삭제 (그룹 번호로 삭제)
    @Transactional
    @Modifying
    @Query(value = "UPDATE TB_REPLY_BOARD SET DELETE_YN = 'Y', " +
            "DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') " +
            "WHERE BOARD_GROUP = :boardGroup "
            , nativeQuery = true
    )
    int removeAllByBoardGroup(@Param("boardGroup") int boardGroup);

    Page<ReplyBoard> findAllByReviewContaining(String review, Pageable pageable);

}
