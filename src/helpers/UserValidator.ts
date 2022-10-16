export default class UserValidator {
  private static USERNAME_MIN_LENGTH = 3;
  private static USERNAME_MAX_LENGTH = 20;
  static USERNAME_REGEX = /^[a-zA-Z0-9_]{3,20}$/;
  static USERNAME_REQUIRED = "Username is required";
  static ERR_USERNAME_INVALID = `Username must be between ${UserValidator.USERNAME_MIN_LENGTH} and ${UserValidator.USERNAME_MAX_LENGTH} characters long and can only contain letters, numbers and underscores.`;
  static ERR_USERNAME_TAKEN = "Username is already taken";

  static WEBSITE_REGEX =
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  static ERR_WEBSITE_INVALID = "Website url is invalid";

  private static PASSWORD_MIN_LENGTH = 8;
  private static PASSWORD_MAX_LENGTH = 100;
  static PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/;
  static ERR_PASSWORD_INVALID = `Password must be between ${UserValidator.PASSWORD_MIN_LENGTH} and ${UserValidator.PASSWORD_MAX_LENGTH} characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.`;

  static EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  static ERR_EMAIL_INVALID = "Email is invalid";
  static ERR_EMAIL_TAKEN = "Email is already taken";
  static EMAIL_REQUIRED = "Email is required";
  static ERR_EMAIL_NOT_FOUND = "Email not found";
}
