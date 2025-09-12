package ticketingsitedemo.server.service;

import org.springframework.stereotype.Service;
import ticketingsitedemo.server.domain.Member;
import ticketingsitedemo.server.repository.MemberRepository;

import java.util.List;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public List<Member> getAllMembers(){
        return memberRepository.findAll();
    }
}
