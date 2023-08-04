package com.example.simplelogin.service;

import com.example.simplelogin.dto.reply.ReplyBoardDto;
import com.example.simplelogin.model.ReplyBoard;
import com.example.simplelogin.model.Tour;
import com.example.simplelogin.repository.ReplyBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service
 * fileName : ReplyBoardService
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
@Service
public class ReplyBoardService {

    @Autowired
    ReplyBoardRepository replyBoardRepository; // 샘플데이터 DB에 접근하는 객체

    public Page<ReplyBoard> findAll(Pageable pageable) {
        Page<ReplyBoard> page = replyBoardRepository.findAll(pageable);

        return page;
    }

    public Optional<ReplyBoard> findById(int dno) {
        Optional<ReplyBoard> optionalReplyBoard = replyBoardRepository.findById(dno);

        return optionalReplyBoard;
    }

    // 답변 글 생성
    public ReplyBoard save(ReplyBoard replyBoard) {

        ReplyBoard replyBoard2 = replyBoardRepository.save(replyBoard);

        return replyBoard2;
    }

    //    답변만 삭제
    public boolean removeById(int bid) {

//        그룹 번호 == 부모 게시물번호임
        if (replyBoardRepository.existsById(bid)) {
            replyBoardRepository.deleteById(bid);
            return true;
        }
        return false;
    }

    //    그룹 번호로 삭제 : 게시물 + 답변 모두 삭제
    public boolean removeAllByBoardGroup(int boardGroup) {

//        그룹 번호 == 부모 게시물번호임
        int deleteCount = replyBoardRepository.removeAllByBoardGroup(boardGroup);

        if (deleteCount > 0) {
            return true;

        } else {
            return false;
        }
    }

    public void removeAll() {

        replyBoardRepository.deleteAll();
    }

    //  계층형 쿼리(답변형 게시판) like 검색
    public Page<ReplyBoardDto> selectByConnectByPage(String boardTitle, Pageable pageable) {

        Page<ReplyBoardDto> page = replyBoardRepository.selectByConnectByPage(boardTitle, pageable);

        return page;
    }

    // 개시물 생성
    public int saveBoard(ReplyBoard replyBoard) {

        int insertCount = replyBoardRepository.insertByBoard(replyBoard);

        return insertCount;
    }

    //    제목(email) like 검색 함수(페이징처리)
    public Page<ReplyBoard> findAllByRevContaining(
            String reviewyn, Pageable pageable
    ) {
        Page<ReplyBoard> page
                = replyBoardRepository
                .findAllByReviewContaining(reviewyn, pageable);

        return page;
    }
}
