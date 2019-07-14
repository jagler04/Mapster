namespace PlauditService.Services
{
    public class PasswordService
    {
        public static string GenerateSaltAndHash(string password)
        {
            return global::BCrypt.Net.BCrypt.HashPassword(password, global::BCrypt.Net.BCrypt.GenerateSalt());
        }

        public static bool CheckPassword(string password, string hashedPassword)
        {
            if (global::BCrypt.Net.BCrypt.CheckPassword(password, hashedPassword))
                return true;
            else
                return false;
        }

    }
}