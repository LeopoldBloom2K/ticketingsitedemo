package ticketingsitedemo.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ticketingsitedemo.server.domain.Member;
import ticketingsitedemo.server.mapper.MemberMapper;

import java.util.List;

@RestController
public class MemberController {
    private final MemberMapper memberMapper;

    public MemberController (MemberMapper memberMapper) {
        this.memberMapper = memberMapper;
    }

    @GetMapping("domain/Member")
    public List<Member> getUsers(){
        return memberMapper.findAll();
    }

}