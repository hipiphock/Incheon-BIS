package com.bis.auth;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.bis.service.UserService;
import com.bis.vo.re.TbOmmUserVO;



@Component
public class BisAuthProvider implements AuthenticationProvider {
	
	@Autowired
	UserService userService;
	
	@Autowired 
	private PasswordEncoder passwordEncoder;
	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		
		String username = authentication.getName(); 
		String password = (String)authentication.getCredentials(); 
		
		System.out.println("##username " + username);
		System.out.println("##password " + password);
//		System.out.println("##encode password : " + passwordEncoder.encode(password));
		TbOmmUserVO usersVO; 
		
		Collection<? extends GrantedAuthority> authorities; 
		
		try { 
			usersVO = userService.loadUserByUsername(username);
//			if (!passwordEncoder.matches(password, usersVO.getPassword())) throw new BadCredentialsException("비밀번호가 일치하지 않습니다."); 
			if (!password.equals(usersVO.getPassword())) throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
			
			usersVO.setRole("ROLE_ADMIN");
			SimpleGrantedAuthority role = new SimpleGrantedAuthority("ROLE_ADMIN");
			List<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
			roles.add(role); 
			usersVO.setAuthorities(roles); 
			authorities = usersVO.getAuthorities(); 
		} catch(UsernameNotFoundException e) { 
			System.out.println(e.toString()); 
			throw new UsernameNotFoundException(e.getMessage()); 
		} catch(BadCredentialsException e) { 
			System.out.println(e.toString()); 
			throw new BadCredentialsException(e.getMessage()); 
		} catch(Exception e) { 
			System.out.println(e.toString()); 
			throw new RuntimeException(e.getMessage()); 
		} 
		UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(usersVO, password, authorities);
		token.setDetails(usersVO);
		return token;
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

}
