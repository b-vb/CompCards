-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Dec 03, 2017 at 07:33 PM
-- Server version: 5.7.20
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CompetitionCards`
--

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `card_id` int(11) NOT NULL,
  `date_created` date NOT NULL,
  `name` varchar(50) NOT NULL,
  `compulsory_routine` int(11) NOT NULL,
  `optional_routine` int(11) NOT NULL,
  `level` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `compulsory_routines`
--

CREATE TABLE `compulsory_routines` (
  `name` varchar(15) NOT NULL,
  `routine` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `elements`
--

CREATE TABLE `elements` (
  `element_id` int(11) NOT NULL,
  `name_en` varchar(30) NOT NULL,
  `name_nl` varchar(30) NOT NULL,
  `fig_code` varchar(15) NOT NULL,
  `diff_trampoline` int(11) NOT NULL,
  `diff_dmt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `routines`
--

CREATE TABLE `routines` (
  `routine_id` int(11) NOT NULL,
  `1` int(11) NOT NULL,
  `2` int(11) NOT NULL,
  `3` int(11) NOT NULL,
  `4` int(11) NOT NULL,
  `5` int(11) NOT NULL,
  `6` int(11) NOT NULL,
  `7` int(11) NOT NULL,
  `8` int(11) NOT NULL,
  `9` int(11) NOT NULL,
  `10` int(11) NOT NULL,
  `diff1` int(2) DEFAULT NULL,
  `diff2` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `gender` char(1) NOT NULL,
  `age` int(2) NOT NULL,
  `nationality` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `club` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_cards`
--

CREATE TABLE `user_cards` (
  `user_id` int(11) NOT NULL,
  `card_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`card_id`),
  ADD KEY `compulsory_routine` (`compulsory_routine`),
  ADD KEY `optional_routine` (`optional_routine`);

--
-- Indexes for table `compulsory_routines`
--
ALTER TABLE `compulsory_routines`
  ADD KEY `routine` (`routine`);

--
-- Indexes for table `elements`
--
ALTER TABLE `elements`
  ADD PRIMARY KEY (`element_id`);

--
-- Indexes for table `routines`
--
ALTER TABLE `routines`
  ADD PRIMARY KEY (`routine_id`),
  ADD KEY `1` (`1`),
  ADD KEY `2` (`2`),
  ADD KEY `3` (`3`),
  ADD KEY `4` (`4`),
  ADD KEY `5` (`5`),
  ADD KEY `6` (`6`),
  ADD KEY `8` (`8`),
  ADD KEY `9` (`9`),
  ADD KEY `10` (`10`),
  ADD KEY `routine_ibfk_7` (`7`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_cards`
--
ALTER TABLE `user_cards`
  ADD KEY `card_id` (`card_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `card_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `elements`
--
ALTER TABLE `elements`
  MODIFY `element_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `routines`
--
ALTER TABLE `routines`
  MODIFY `routine_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `cards_ibfk_1` FOREIGN KEY (`compulsory_routine`) REFERENCES `routines` (`routine_id`),
  ADD CONSTRAINT `cards_ibfk_2` FOREIGN KEY (`optional_routine`) REFERENCES `routines` (`routine_id`);

--
-- Constraints for table `compulsory_routines`
--
ALTER TABLE `compulsory_routines`
  ADD CONSTRAINT `compulsory_routines_ibfk_1` FOREIGN KEY (`routine`) REFERENCES `routines` (`routine_id`);

--
-- Constraints for table `routines`
--
ALTER TABLE `routines`
  ADD CONSTRAINT `routines_ibfk_1` FOREIGN KEY (`1`) REFERENCES `elements` (`element_id`),
  ADD CONSTRAINT `routines_ibfk_10` FOREIGN KEY (`10`) REFERENCES `elements` (`element_id`),
  ADD CONSTRAINT `routines_ibfk_2` FOREIGN KEY (`2`) REFERENCES `elements` (`element_id`),
  ADD CONSTRAINT `routines_ibfk_3` FOREIGN KEY (`3`) REFERENCES `elements` (`element_id`),
  ADD CONSTRAINT `routines_ibfk_4` FOREIGN KEY (`4`) REFERENCES `elements` (`element_id`),
  ADD CONSTRAINT `routines_ibfk_5` FOREIGN KEY (`5`) REFERENCES `elements` (`element_id`),
  ADD CONSTRAINT `routines_ibfk_6` FOREIGN KEY (`6`) REFERENCES `elements` (`element_id`),
  ADD CONSTRAINT `routines_ibfk_7` FOREIGN KEY (`7`) REFERENCES `elements` (`element_id`),
  ADD CONSTRAINT `routines_ibfk_8` FOREIGN KEY (`8`) REFERENCES `elements` (`element_id`),
  ADD CONSTRAINT `routines_ibfk_9` FOREIGN KEY (`9`) REFERENCES `elements` (`element_id`);

--
-- Constraints for table `user_cards`
--
ALTER TABLE `user_cards`
  ADD CONSTRAINT `user_cards_ibfk_1` FOREIGN KEY (`card_id`) REFERENCES `cards` (`card_id`),
  ADD CONSTRAINT `user_cards_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
