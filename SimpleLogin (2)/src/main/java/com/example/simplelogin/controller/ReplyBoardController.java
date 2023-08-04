package com.example.simplelogin.controller;

import com.example.simplelogin.dto.reply.ReplyBoardDto;
import com.example.simplelogin.model.ReplyBoard;
import com.example.simplelogin.model.Tour;
import com.example.simplelogin.service.ReplyBoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller
 * fileName : ReplyBoardController
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
@Slf4j
@RestController
@RequestMapping("/api")
public class ReplyBoardController {

    @Autowired
    ReplyBoardService replyBoardService;
    @GetMapping("/reply-board")
    public ResponseEntity<Object> getReplyBoardAll(
            @RequestParam(defaultValue = "") String boardTitle,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {

        try {
//            페이지 변수 저장
            Pageable pageable = PageRequest.of(page, size);

//            List<ReplyBoard> list = Collections.emptyList();
            Page<ReplyBoard> replyBoardPage;

            replyBoardPage = replyBoardService.findAll(pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("replyBoard", replyBoardPage.getContent());
            response.put("currentPage", replyBoardPage.getNumber());
            response.put("totalItems", replyBoardPage.getTotalElements());
            response.put("totalPages", replyBoardPage.getTotalPages());

            if (replyBoardPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //     1)전체 조회 함수 + 2) Email(제목) like 검색 함수(페이징처리)
    @GetMapping("/revin")
    public ResponseEntity<Object> getRev(
            @RequestParam(required = false, defaultValue = "Y") String review,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            // TODO: Pageable 객체 저장 : page(현재페이지번호)
            //                        , size(1페이지당개수) 값
//                  사용법) Pageable pageable
//                           = PageRequest.of(현재페이지, 1페이지당개수)
            Pageable pageable = PageRequest.of(page, size);

            Page<ReplyBoard> replyBoardPage
                    = replyBoardService.findAllByRevContaining(review, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("replyBoard", replyBoardPage.getContent()); // tour 객체배열
            response.put("currentPage", replyBoardPage.getNumber()); // 현재페이지번호
            response.put("totalItems", replyBoardPage.getTotalElements()); // 총개수(건수)
            response.put("totalPages", replyBoardPage.getTotalPages()); // 총페이지수

            if (replyBoardPage.isEmpty() == false) {
                // 성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                // 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage()); // 에러 출력
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/reply-board/{bid}")
    public ResponseEntity<Object> getReplyBoardId(@PathVariable int bid) {

        try {
            Optional<ReplyBoard> optionalReplyBoard = replyBoardService.findById(bid);

            if (optionalReplyBoard.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalReplyBoard.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/reply")
    public ResponseEntity<Object> createReply(@RequestBody ReplyBoard replyBoard) {

        try {
            ReplyBoard replyBoard2 = replyBoardService.save(replyBoard);

            return new ResponseEntity<>(replyBoard2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/reply-board/{bid}")
    public ResponseEntity<Object> updateReplyBoard(@PathVariable int bid, @RequestBody ReplyBoard replyBoard) {

        try {
            ReplyBoard replyBoard2 = replyBoardService.save(replyBoard);

            return new ResponseEntity<>(replyBoard2, HttpStatus.OK);

        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//  답변만 삭제
    @DeleteMapping("/reply/deletion/{bid}")
    public ResponseEntity<Object> deleteReply(@PathVariable int bid) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = replyBoardService.removeById(bid);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    게시물 - 답변 모두 삭제
    @DeleteMapping("/reply-board/deletion/{boardGroup}")
    public ResponseEntity<Object> deleteReplyBoard(@PathVariable int boardGroup) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = replyBoardService.removeAllByBoardGroup(boardGroup);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/reply-board/all")
    public ResponseEntity<Object> deleteAll() {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            replyBoardService.removeAll();

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/reply-board")
    public ResponseEntity<Object> createReplyBoard(@RequestBody ReplyBoard replyBoard) {

        try {
            int insertCount = replyBoardService.saveBoard(replyBoard);

            return new ResponseEntity<>(insertCount, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
