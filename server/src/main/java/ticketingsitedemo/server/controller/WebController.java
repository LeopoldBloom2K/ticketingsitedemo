package ticketingsitedemo.server.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ticketingsitedemo.server.service.MemberService;

@Controller
public class WebController {
    private final MemberService memberService;

    public WebController(MemberService memberService){
        this.memberService = memberService;
    }

    @GetMapping("/members-list")
    public String getMembers(Model model){
        model.addAttribute("member", memberService.getAllMembers());
        return "members-list"; // src/main/resources/templates/members-list .html 에 출력
    }
}
