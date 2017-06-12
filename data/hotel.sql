-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-11-12 18:13:41
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--
CREATE DATABASE IF NOT EXISTS `hotel` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `hotel`;

-- --------------------------------------------------------

--
-- 表的结构 `hotel_foods`
--

CREATE TABLE `hotel_foods` (
  `fid` int(11) NOT NULL,
  `fname` varchar(100) DEFAULT NULL,
  `fintr` varchar(300) DEFAULT NULL,
  `fprice` int(10) DEFAULT NULL,
  `fimg` varchar(128) DEFAULT NULL,
  `fcount` int(11) DEFAULT NULL,
  `type` varchar(30) NOT NULL COMMENT '类型'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hotel_foods`
--

INSERT INTO `hotel_foods` (`fid`, `fname`, `fintr`, `fprice`, `fimg`, `fcount`, `type`) VALUES
(1, '遨游地中海', '东坡腊香肠、比萨酱、马苏里拉芝士\n\n四川东坡腊肠又麻又辣与马苏里拉碰撞，中西合璧，出神入化的味道', 92, 'images\\meal\\food\\piz_01.jpg', 100, '002'),
(2, '番茄公主', '意大利香肠、比萨酱、马苏里拉芝士\n\n风味浓郁的传统意大利香肠辅以特制比萨酱，独具意式风味，美味难挡！', 86, 'images\\meal\\food\\piz_02.jpg', 96, '001'),
(3, '遨游地中海', '马苏里拉芝士、意式香肠、火腿、牛肉粒、培根、比萨酱\n\n美味的火腿、牛肉粒、培根等丰富馅料融入浓浓芝士，为肉食爱好者送上了一份无比美味的饕餮享受。', 92, 'images\\meal\\food\\piz_03.jpg', 100, '002'),
(5, '浪漫佩鲁', '马苏里拉芝士、口蘑、洋葱、青椒、红椒、玉米粒、黑水榄、比萨酱\n\n香浓芝士佐以青红椒等色彩鲜明的时令鲜蔬，健康美味，一尝难忘！', 92, 'images\\meal\\food\\piz_05.jpg', 100, '002'),
(6, '蜜豆狂欢', '马苏里拉芝士、烤鸡肉、青椒、红椒、洋葱、菠萝\n\n烤鸡肉、青红椒和洋葱的组合在香甜BBQ酱的配衬下更浓郁诱人，美味无法抵抗！', 86, 'images\\meal\\food\\piz_06.jpg', 96, '002'),
(7, '翩翩舞者', '猪肉碎、西兰花、番茄丁、玉米', 92, 'images\\meal\\food\\piz_07.jpg', 100, '001'),
(8, '青介鳗鱼', ' 鳗鱼、青椒、洋葱、番茄丁、芝士、黑胡椒酱', 86, 'images\\meal\\food\\piz_08.jpg', 96, '002'),
(9, '神秘诱惑', 'BBQ酱、烟熏鸡肉丁、玉米、洋葱、美乃滋', 92, 'images\\meal\\food\\piz_09.jpg', 100, '002'),
(10, '希腊女神', '美式香肠片、火腿、意式香肠丁、玉米', 86, 'images\\meal\\food\\piz_10.jpg', 96, '002'),
(11, '夏威夷', '火腿、美式香肠片、意式香肠丁、洋葱、培根、番茄丁', 92, 'images\\meal\\food\\piz_11.jpg', 100, '002'),
(12, '意大利', '鱿鱼花、虾仁、洋葱、青椒、玉米、番茄丁、法式美乃滋', 92, 'images\\meal\\food\\piz_13.jpg', 100, '002'),
(13, '印第安风情', '嫩汁鸡块、火腿、青椒、菠萝丁', 86, 'images\\meal\\food\\piz_14.jpg', 96, '002'),
(14, '酷涼一夏', '亨利爵士琴酒搭配清爽的大黃瓜與新鮮檸檬萊姆汁，絕對讓您意猶未盡', 48, 'images\\meal\\food\\d_01.jpg', 100, '007'),
(15, '黑莓情人', '以傑克丹尼爾®威士忌為基底，加入水蜜桃香甜酒、香格里拉糖漿、新鮮薄荷和黑莓', 50, 'images\\meal\\food\\d_02.jpg', 96, '007'),
(16, '奶昔', '香草/巧克力/巧克力脆片/Oreo®/草莓/香蕉/椰子', 36, 'images\\meal\\food\\d_03.jpg', 96, '007'),
(17, '柑橘紅酒香格里拉', '以紅酒與法國干邑柑橘酒為基底，加入新鮮水果切丁、新鮮檸檬萊姆汁與龍舌蘭蜜，最後加入檸檬蘇打汽水，散發濃郁的水果香甜滋味', 33, 'images\\meal\\food\\d_04.jpg', 100, '007'),
(18, '黑莓長島冰茶', '頂級琴酒、蘭姆酒、伏特加、覆盆莓香甜酒、柑橘香甜酒與黑莓，散發濃郁莓果香氣', 45, 'images\\meal\\food\\d_05.jpg', 96, '007'),
(19, '骨叉', '使用', 92, 'images\\meal\\food\\x_01.jpg', 100, '006'),
(20, '番茄公主', NULL, 86, 'images\\meal\\food\\x_02.jpg', 96, '006'),
(21, '遨游地中海', '使用', 92, 'images\\meal\\food\\x_03.jpg', 100, '006'),
(22, '浪漫佩鲁', '使用', 92, 'images\\meal\\food\\x_05.jpg', 100, '006'),
(23, '蜜豆狂欢', NULL, 86, 'images\\meal\\food\\x_06.jpg', 96, '006'),
(24, '翩翩舞者', '使用', 92, 'images\\meal\\food\\x_07.jpg', 100, '006'),
(25, '青介鳗鱼', NULL, 86, 'images\\meal\\food\\x_08.jpg', 96, '006'),
(26, '神秘诱惑', '使用', 92, 'images\\meal\\food\\x_09.jpg', 100, '006'),
(27, '希腊女神', NULL, 86, 'images\\meal\\food\\x_10.jpg', 96, '006'),
(28, '金牌辣雞翅', '創新口味雞翅，綜合蘋果烤肉醬與傑克丹尼爾®威士忌甜酒醬，加上新鮮檸檬汁，搭配新鮮美國芹菜與奶油藍起司醬', 92, 'images\\meal\\food\\x_04.jpg', 100, '006'),
(29, '草莓園鮮蔬沙拉 ', '冰脆的羅美生菜與新鮮綜合生菜、帕米森起司、新鮮草莓切片，搭配FRIDAYS™特製葡萄酒醋醬與糖霜核桃', 92, 'images\\meal\\food\\s_01.jpg', 100, '008'),
(30, '科莉布索鱿鱼圈沙拉\n', '脆炸鱿鱼圈、混合蔬菜、薄荷叶，搭配莱姆角、新鲜番茄、菠萝和烤', 86, 'images\\meal\\food\\s_02.jpg', 96, '008'),
(31, '彩虹沙拉', '新鲜生菜配上炭烤鸡胸、寇比芝士、黑橄榄、西红柿、蓝芝士, 配蜂蜜芥末酱。', 92, 'images\\meal\\food\\s_03.jpg', 100, '008'),
(32, '凱撒沙拉', '美式經典代表。使用新鮮羅美生菜、香蒜奶油麵包丁以及帕米森起司', 92, 'images\\meal\\food\\s_04.jpg', 100, '008'),
(33, '纽奥良鸡肉沙拉', '纽奥良风味酥炸鸡肉、新鲜生菜、小番茄、鸡蛋及杰克芝士，配蜂蜜芥末酱', 86, 'images\\meal\\food\\s_05.jpg', 96, '008'),
(34, '義式油醋雞肉沙拉', '爽口羅美生菜拌上凱撒油醋醬，加上香蒜奶油麵包丁、帕米森起司、新鮮蕃茄，最後舖上炭烤酒醋雞肉', 92, 'images\\meal\\food\\s_06.jpg', 100, '008'),
(35, '繽紛莓果摩西多', '頂級蘭姆酒搭配新鮮薄荷葉、多種莓果、石榴與新鮮檸檬萊姆汁，讓您感受新鮮暢快', 92, 'images\\meal\\food\\d_06.jpg', 100, '007'),
(36, '三式組合', 'FRIDAYS™最經典的開胃菜拼盤，包含馬鈴薯皮、經典紐約辣雞翅，以及香酥馬芝拉條， 適合多人一同享用', 86, 'images\\meal\\food\\t_01.jpg', 96, '009'),
(37, '通心麵起司磚', '以帕米森起司、傑克起司加上濃郁的奶油燉飯手工製成，裹上特製調味粉炸至金褐色，適合搭配酸甜茄汁醬一起享用。', 92, 'images\\meal\\food\\t_02.jpg', 100, '009'),
(38, '遨游地中海', '使用', 92, 'images\\meal\\food\\t_03.jpg', 100, '009'),
(39, '肋眼牛排', '饱含大理石般的花纹，最容易烹调入味，肉间的油脂让口感更添滑顺。', 86, 'images\\meal\\food\\steak01.jpg', 96, '003'),
(40, '沙朗牛排', '精選沙朗牛排，精心炭烤到您喜愛的熟度。可挑選任兩道主廚精選配菜與您自選的醬料一同享用。\n*醬料可選擇：野菇醬/黑胡椒醬', 86, 'images\\meal\\food\\steak02.jpg', 96, '003'),
(41, '紐奧良沙朗牛排', '炭烤至七分熟的6OZ.沙朗牛排，搭配烘烤蘑菇、洋蔥、青椒、紅椒、青花菜，佐以新鮮墨西哥蕃茄醬與法式紅酒牛肉汁，建議與茉莉香米飯一同享用', 86, 'images\\meal\\food\\steak03.jpg', 96, '003');

-- --------------------------------------------------------

--
-- 表的结构 `hotel_news`
--

CREATE TABLE `hotel_news` (
  `newId` int(11) NOT NULL,
  `newTitle` varchar(200) DEFAULT NULL,
  `details` varchar(300) DEFAULT NULL,
  `relTime` date DEFAULT NULL,
  `newImg` varchar(128) DEFAULT NULL,
  `nType` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hotel_news`
--

INSERT INTO `hotel_news` (`newId`, `newTitle`, `details`, `relTime`, `newImg`, `nType`) VALUES
(1, '来玩游戏赢千元大奖...', ' 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...', '2016-08-16', 'images/act_01.jpg', '0'),
(2, '关注微博微信并互动送新加坡豆花...', ' 即日起，关注大利来官方微博/微信并参与互动，送新加坡豆花一份。...', '2016-08-16', 'images/act_02.jpg', '0'),
(3, '来玩游戏赢千元大奖...', '大厨指导5款高颜值甜品制作方法..', '2016-08-11', 'images/act_03.jpg', '0'),
(4, '来玩游戏赢千元大奖...', ' 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...', '2016-08-10', 'images/act_01.jpg', '0'),
(5, '关注微博微信并互动送新加坡豆花...', '即日起，关注大利来官方微博/微信并参与互动，送新加坡豆花一份。...', '2016-08-16', 'images/act_02.jpg', '0'),
(6, '来玩游戏赢千元大奖...', ' 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...', '2016-08-16', 'images/act_03.jpg', '0'),
(7, '来玩游戏赢千元大奖...', ' 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...', '2016-08-16', 'images/act_01.jpg', '0'),
(8, '来玩游戏赢千元大奖...', ' 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...', '2016-08-16', 'images/act_01.jpg', '0'),
(9, '来玩游戏赢千元大奖...', ' 关注“大利来”微信公众号，回复“奥运”，即可参加助力奥运...', '2016-08-16', 'images/act_01.jpg', '0'),
(10, '入住过夜房', '1.入住过夜房赠送金翅鸟门票\r\n          2.免费享受自助洗衣服务', '2016-10-05', 'images/act_05.jpg', '0'),
(11, '入住赠送礼包', '1.入住赠送健康早餐2份\r\n          2.入住享受会员专享迪士尼免费班车接送', '2016-10-06', 'images/act_06.jpg', '0'),
(12, '新会员首晚68折', '1. 活动期间，通过上门办理会员卡并成功入住，均可享受门市价6.8折，并在酒店前台领取精美礼品一份；\r\n          2. 通过官网APP及订房网（特价房除外）入住客人都可获赠迪斯尼纪念品一套（颜色随机）；\r\n          3. 任何渠道连住7天(含7天)以上可获赠原价98元迪斯尼运动不锈钢保温杯一只（每个房间只能参加一次活动，水杯颜色随机）\r\n          4. 任何在住客人都可加88元换购迪斯尼运动不锈钢保温杯一只（原价98元）\r\n          ', '2016-10-06', 'images/act_07.jpg', '0'),
(13, '为入住客人免费提供干衣机', '活动时间：2015年9月15日起长期有效', '2016-10-14', 'images/act_09.jpg', '0'),
(14, '入住获下午茶赠送 ', '在住客人凭房卡可以免费在酒店四楼咖啡厅领一杯价值18元的下午茶，时间为早上9点到晚上21点。（额外的需自费，发票由咖啡厅提供）', '2016-10-06', 'images/act_07.jpg', '0');

-- --------------------------------------------------------

--
-- 表的结构 `hotel_order`
--

CREATE TABLE `hotel_order` (
  `oid` int(11) NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `uname` varchar(30) DEFAULT NULL,
  `orderNum` int(11) NOT NULL,
  `orderTime` bigint(128) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hotel_order`
--

INSERT INTO `hotel_order` (`oid`, `phone`, `uname`, `orderNum`, `orderTime`, `status`) VALUES
(1, '13457744151', '李莉', 1234567890, 4518975364, 0);

-- --------------------------------------------------------

--
-- 表的结构 `hotel_order_detail`
--

CREATE TABLE `hotel_order_detail` (
  `did` int(11) NOT NULL,
  `oid` int(11) DEFAULT NULL,
  `fid` int(11) DEFAULT NULL,
  `fcount` int(11) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  `rcount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hotel_order_detail`
--

INSERT INTO `hotel_order_detail` (`did`, `oid`, `fid`, `fcount`, `rid`, `rcount`) VALUES
(1, 101, 1, 1, 1, 2);

-- --------------------------------------------------------

--
-- 表的结构 `hotel_room_order_detail`
--

CREATE TABLE `hotel_room_order_detail` (
  `oid` int(11) NOT NULL,
  `stime` date DEFAULT NULL,
  `ltime` date DEFAULT NULL,
  `num` int(10) DEFAULT NULL,
  `rid` int(30) DEFAULT NULL,
  `tname` varchar(30) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  `pay` int(11) DEFAULT NULL,
  `tprice` int(11) NOT NULL,
  `orderNum` int(200) NOT NULL,
  `ordertime` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hotel_room_order_detail`
--

INSERT INTO `hotel_room_order_detail` (`oid`, `stime`, `ltime`, `num`, `rid`, `tname`, `mobile`, `pay`, `tprice`, `orderNum`, `ordertime`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0),
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0),
(3, '2016-11-23', '2016-11-24', 2, 0, '劳秋华', '13457744151', 1, 516, 0, 0),
(4, '0000-00-00', '0000-00-00', 0, 0, '', '', 0, 0, 1115793921, 0),
(5, '2016-11-23', '2016-11-24', 2, 2, '', '', 1, 516, 1288252155, 0),
(6, '2016-11-23', '2016-11-24', 2, 2, '', '', 1, 516, 1088975984, 1478967669),
(7, '2016-11-23', '2016-11-24', 2, 2, '劳秋华', '13457744151', 1, 516, 1192343302, 1478968621),
(8, '2016-11-23', '2016-11-24', 2, 2, '劳秋华', '13457744151', 1, 516, 1072732548, 1478968731),
(9, '2016-11-23', '2016-11-24', 2, 2, '', '', 1, 516, 1245015583, 1478968748),
(10, '0000-00-00', '0000-00-00', 0, 0, '', '', 0, 0, 1187713047, 1478968754),
(11, '0000-00-00', '0000-00-00', 0, 0, '', '', 0, 0, 1059792862, 1478968773),
(12, '2016-11-23', '2016-11-24', 2, 2, '', '', 1, 516, 1354339662, 1478968783),
(13, '2016-11-23', '2016-11-24', 2, 2, '', '', 1, 516, 1162947439, 1478968811),
(14, '2016-11-23', '2016-11-24', 2, 2, '', '', 1, 516, 1148393421, 1478968832),
(15, '2016-11-23', '2016-11-24', 1, 2, '劳秋华', '13457744151', 1, 258, 1007108067, 1478970549);

-- --------------------------------------------------------

--
-- 表的结构 `hotel_rooms`
--

CREATE TABLE `hotel_rooms` (
  `rid` int(11) NOT NULL,
  `roomNum` int(11) DEFAULT NULL,
  `proPrice` int(11) DEFAULT NULL,
  `RegPrice` int(11) DEFAULT NULL,
  `houseType` varchar(11) DEFAULT NULL,
  `bedType` int(11) DEFAULT NULL,
  `rPic` varchar(128) DEFAULT NULL,
  `lpic` varchar(128) NOT NULL,
  `mating` int(11) DEFAULT NULL,
  `bookNum` int(11) DEFAULT NULL,
  `cancel` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hotel_rooms`
--

INSERT INTO `hotel_rooms` (`rid`, `roomNum`, `proPrice`, `RegPrice`, `houseType`, `bedType`, `rPic`, `lpic`, `mating`, `bookNum`, `cancel`) VALUES
(1, 16, 248, 268, '豪华大床房', 1, 'images/hotel/room_list_01.jpg', 'images/hotel/room01_l.jpg', 1, 10, 0),
(2, 7, 258, 288, '温馨单人房', 2, 'images/hotel/room_list_02.jpg', '', 1, 7, 1),
(3, 5, 258, 368, '温馨大床房', 1, 'images/hotel/room_list_03.jpg', '', 1, 5, 1),
(4, 20, 286, 300, '温馨大床房', 3, 'images/hotel/room_list_04.jpg', '', 1, 3, 0),
(5, 10, 258, 368, '温馨大床房', 2, 'images/hotel/room_list_05.jpg', '', 1, 4, 1),
(6, 15, 286, 306, '豪华大床房', 2, 'images/hotel/room_list_06.jpg', '', 1, 7, 0),
(7, 8, 258, 368, '商务套房', 3, 'images/hotel/room_list_07.jpg', '', 1, 8, 0),
(8, 12, 258, 368, '经济双人间', 3, 'images/hotel/room_list_08.jpg', '', 1, 9, 0),
(9, 10, 258, 300, '豪华单人间', 2, 'images/hotel/room_list_09.jpg', '', 1, 2, 1);

-- --------------------------------------------------------

--
-- 表的结构 `hotel_user`
--

CREATE TABLE `hotel_user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(32) NOT NULL,
  `upwd` varchar(32) NOT NULL,
  `uphone` varchar(11) NOT NULL,
  `email` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hotel_user`
--

INSERT INTO `hotel_user` (`uid`, `uname`, `upwd`, `uphone`, `email`) VALUES
(1, 'LQH', '123456', '18877826750', '562553897@qq.com'),
(2, 'admin', '456789', '13457744151', '1439246244@qq.com');

-- --------------------------------------------------------

--
-- 表的结构 `hotel_user_views`
--

CREATE TABLE `hotel_user_views` (
  `vId` int(11) NOT NULL,
  `uId` int(11) DEFAULT NULL,
  `vdetail` varchar(600) DEFAULT NULL,
  `reply` varchar(600) DEFAULT NULL,
  `grade` float DEFAULT NULL,
  `postTime` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hotel_user_views`
--

INSERT INTO `hotel_user_views` (`vId`, `uId`, `vdetail`, `reply`, `grade`, `postTime`) VALUES
(1, 1, '房间非常好，服务特别细致，很满意。但是餐厅服务有下降，菜品也不如以前了', '亲爱的宾客，非常感谢您选择大利来酒店作为您的下榻之所并为我们提出宝贵意见，我们会针对您提出的宝贵意见及时反馈相关部门整改，相信您下次入住时一定会有更好的入住用餐体验。我们一直致力于为顾客打造优质的产品和服务，以满足顾客需求为己任。真诚期待您再次体验我们的产品、品鉴我们的服务！', 5, '2016-10-05'),
(2, 2, '酒店房间宽敞明亮，可观到大海，环境景观都较好，房间设施卫生整洁，服务周到热情，早餐和零点也很丰富，非常满意', '尊敬的贵宾：您好，非常感谢您对我们的支持与厚爱，您给予我们如此高的评价让我们倍感荣耀。我们非常期待您能再次光临我们酒店、品鉴我们的服务！“您的需求，我的责任”一直是我们奉行的服务理念，希望您能多关注我们酒店，为我们提供宝贵建议，帮助我们提升！祝您工作愉快！', 4, '2016-10-05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hotel_foods`
--
ALTER TABLE `hotel_foods`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `hotel_order`
--
ALTER TABLE `hotel_order`
  ADD PRIMARY KEY (`oid`);

--
-- Indexes for table `hotel_order_detail`
--
ALTER TABLE `hotel_order_detail`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `hotel_room_order_detail`
--
ALTER TABLE `hotel_room_order_detail`
  ADD PRIMARY KEY (`oid`);

--
-- Indexes for table `hotel_rooms`
--
ALTER TABLE `hotel_rooms`
  ADD PRIMARY KEY (`rid`);

--
-- Indexes for table `hotel_user`
--
ALTER TABLE `hotel_user`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `hotel_user_views`
--
ALTER TABLE `hotel_user_views`
  ADD PRIMARY KEY (`vId`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `hotel_order`
--
ALTER TABLE `hotel_order`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `hotel_order_detail`
--
ALTER TABLE `hotel_order_detail`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `hotel_room_order_detail`
--
ALTER TABLE `hotel_room_order_detail`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- 使用表AUTO_INCREMENT `hotel_user`
--
ALTER TABLE `hotel_user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `hotel_user_views`
--
ALTER TABLE `hotel_user_views`
  MODIFY `vId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
