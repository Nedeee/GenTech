package lightningwheels.demo.model;

public class LoginRequest {

    private String email;
    private String password;

    // Constructor implicit
    public LoginRequest() {
    }

    // Constructor cu parametri
    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getteri și setteri
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
