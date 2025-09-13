package ticketingsitedemo.server.controller;

import org.springframework.web.bind.annotation.*;
import ticketingsitedemo.server.domain.Member;
import ticketingsitedemo.server.mapper.MemberMapper;

import java.util.List;

@RestController
@RequestMapping("/members")
public class MemberController {
    private final MemberMapper memberMapper;

    public MemberController(MemberMapper memberMapper) {
        this.memberMapper = memberMapper;
    }

    @GetMapping
    public List<Member> getAll() {
        return memberMapper.findAll();
    }

    @GetMapping("/{id}")
    public Member getById(@PathVariable Long id) {
        return memberMapper.findById(id);
    }

    @PostMapping
    public void create(@RequestBody Member member) {
        memberMapper.insert(member);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable Long id,
                       @RequestBody Member member) {
        member.setId(id);
        memberMapper.update(member);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        memberMapper.delete(id);
    }
}