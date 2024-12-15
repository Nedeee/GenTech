package lightningwheels.demo.util;

import lightningwheels.demo.model.*;
import lightningwheels.demo.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean register(Users user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return false; // User already exists
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return true;
    }

    public String login(LoginRequest loginRequest) {
        Optional<Users> userOpt = userRepository.findByEmail(loginRequest.getEmail());
        if (userOpt.isPresent()) {
            Users user = userOpt.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                return jwtUtil.generateToken(user.getEmail());
            }
        }
        return null;
    }
}
