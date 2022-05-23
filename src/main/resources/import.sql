-- Users
insert into "User" ("id", "email", "password", "presentation", "username", "ACCOUNT_NOT_EXPIRED", "ACCOUNT_NOT_LOCKED", "CREDENTIAL_NOT_EXPIRED", "ENABLED") values (NEXTVAL('"USER_SEQ"'), 'admin@gmail.com', '$2a$12$Hp3IVrTI.3OoiBgNFUdJKe7/8rDSs5Wk8tAhUod5VIMgJS8tRpKru', 'Sono un admin', 'admin', true, true, true, true);
insert into "User" ("id", "email", "password", "presentation", "username", "ACCOUNT_NOT_EXPIRED", "ACCOUNT_NOT_LOCKED", "CREDENTIAL_NOT_EXPIRED", "ENABLED") values (NEXTVAL('"USER_SEQ"'), 'gamer@gmail.com', '$2a$12$SR1sVc2woMOWcBpHbYDI4.TIhmVmN0utFN48gTRI8XFW17Rn88dda', 'Sono un gamer', 'gamer', true, true, true, true);
--
-- Instance (Settings)
insert into "Settings" ("id", "name", "color", "moves") values (NEXTVAL('"SETTINGS_SEQ"'), 'test', 'ROSSO', 60);
