SET NAMES UTF8;
DROP DATABASE IF EXISTS hotel;
CREATE DATABASE jd CHARSET=UTF8;
USE jd;

CREATE TABLE hotel_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
INSERT INTO jd_user VALUES
(1, 'admin', '123456'),
(2, 'lqh', '456789');

/*信息表*/
create table hotel_news(
    newId int primary key auto_increment,
    newTitle varchar(200),
    details varchar(300),
    relTime date,
    newImg  varchar(128)
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);
insert into hotel_news values(
    null, '关注微博微信并互动送新加坡豆花...', '即日起，关注大利来官方微博/微信并参与互动，送新加坡豆花一份。...'
);
insert into hotel_news values(
    null, '入住过夜房', '1.入住过夜房赠送金翅鸟门票\r\n          2.免费享受自助洗衣服务', '2016-10-05', 'images/act_05.jpg', '0'
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);

insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);

insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);
insert into hotel_news values(
    null,"来玩游戏赢千元大奖..."," 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...","2016-08-16","images/act_01.jpg"
);

#评价表
create table hotel_user_views(
    vId int primary key auto_increment,
    uId int,
    vdetail varchar(600),
    reply varchar(600),
    grade float;
    date bigint;
);

#订单表
create table hotel_order(
    oid int primary key auto_increment,
    phone varchar(30),
    uname varchar(30),  
);
insert into hotel_order values(null,'13457744151','李莉');


#订单详情表
create table hotel_order_detail(
     did int primary key auto_increment,
     oid int,
     fid int,
     fcount int,
     rid int,
     rcount int
);
insert into hotel_order_detail values(null,101,1,1,1,2);
insert into hotel_order_detail values(null,1,101,null,null,1,1);

#客房订单表
create table hotel_room_order_detail(
    oid int primary key auto_increment,
    stime date,
    ltime date,
    num int(10),
    rid    int(30),
    tname varchar(30),
    mobile varchar(11),
    pay int
)
#购物车表
create table hotel_cart(
   cid int primary key auto_increment,
   userId int
);
insert into hotel_cart values(null,1);

#购物车详情表
create table hotel_cart_details(
   cdId int primary key auto_increment,
   cartId int,
   productId int ,
   count    int,
   type      int
);
insert into hotel_cart_details values(null,1,3,2,2);


#房间状态
create table hotel_room_number(
    doorId int primary key auto_increment,
    hType varchar(32),
    rid int，
    booking int,
);
insert into hotel_room_number values(null,"豪华大床间"，1,0);
insert into hotel_room_number values(null,"豪华大床间"，1,0);
insert into hotel_room_number values(null,"豪华大床间"，1,0);
insert into hotel_room_number values(null,"豪华大床间"，1,0);
insert into hotel_room_number values(null,"温馨单人房"，2,0);
insert into hotel_room_number values(null,"温馨单人房"，2,0);
insert into hotel_room_number values(null,"温馨单人房"，2,0);
insert into hotel_room_number values(null,"温馨单人房"，2,0);
insert into hotel_room_number values(null,"温馨单人房"，2,0);
insert into hotel_room_number values(null,"温馨大床房"，3,0);
insert into hotel_room_number values(null,"温馨大床房"，3,0);
insert into hotel_room_number values(null,"温馨大床房"，3,0);
insert into hotel_room_number values(null,"温馨大床房"，3,0);
insert into hotel_room_number values(null,"温馨大床房"，4,0);
insert into hotel_room_number values(null,"温馨大床房"，4,0);
insert into hotel_room_number values(null,"温馨大床房"，4,0);
insert into hotel_room_number values(null,"温馨大床房"，5,0);
insert into hotel_room_number values(null,"温馨大床房"，5,0);
insert into hotel_room_number values(null,"温馨大床房"，5,0);
insert into hotel_room_number values(null,"温馨大床房"，5,0);
insert into hotel_room_number values(null,"温馨大床房"，5,0);
insert into hotel_room_number values(null,"豪华大床房"，6,0);
insert into hotel_room_number values(null,"豪华大床房"，6,0);
insert into hotel_room_number values(null,"豪华大床房"，6,0);
insert into hotel_room_number values(null,"豪华大床房"，6,0);
insert into hotel_room_number values(null,"豪华大床房"，6,0);
insert into hotel_room_number values(null,"豪华大床房"，6,0);
insert into hotel_room_number values(null,"经济单人房"，7,0);
insert into hotel_room_number values(null,"经济单人房"，7,0);
insert into hotel_room_number values(null,"经济单人房"，7,0);
insert into hotel_room_number values(null,"经济单人房"，7,0);
insert into hotel_room_number values(null,"经济单人房"，8,0);
insert into hotel_room_number values(null,"经济单人房"，8,0);
insert into hotel_room_number values(null,"经济单人房"，8,0);
insert into hotel_room_number values(null,"经济单人房"，8,0);
insert into hotel_room_number values(null,"经济单人房"，8,0);
insert into hotel_room_number values(null,"豪华双人房"，9,0);
insert into hotel_room_number values(null,"豪华双人房"，9,0);
insert into hotel_room_number values(null,"豪华双人房"，9,0);
insert into hotel_room_number values(null,"豪华双人房"，9,0);

--入住详情表
create table hotel_booking_details(
    doorId int primary key auto_increment,
    name varchar(32)
);
