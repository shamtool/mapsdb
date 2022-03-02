SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
CREATE DATABASE IF NOT EXISTS `mapsconfig` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `mapsconfig`;

CREATE TABLE `Attribute` (
  `id` varchar(127) NOT NULL,
  `displayName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `Attribute` (`id`, `displayName`) VALUES
('divinityDifficulty', 'Difficulty');

CREATE TABLE `Category` (
  `id` varchar(127) NOT NULL,
  `displayName` varchar(255) DEFAULT NULL,
  `shortName` varchar(255) DEFAULT NULL,
  `orderIndex` int(11) NOT NULL,
  `description` varchar(1023) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `CategoryAttributes` (
  `categoryId` varchar(255) NOT NULL,
  `attrId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


ALTER TABLE `Attribute`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `CategoryAttributes`
  ADD PRIMARY KEY (`categoryId`,`attrId`);
CREATE DATABASE IF NOT EXISTS `mapsdb` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `mapsdb`;

CREATE TABLE `AttributeValues` (
  `id` int(11) NOT NULL,
  `integerValue` int(11) DEFAULT NULL,
  `doubleValue` double DEFAULT NULL,
  `stringValue` varchar(2047) DEFAULT NULL,
  `booleanValue` tinyint(1) DEFAULT NULL,
  `longStringValue` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `MapAttributes` (
  `mapCode` int(11) NOT NULL,
  `attrId` varchar(127) NOT NULL,
  `attrValueId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `MapCategories` (
  `mapCode` int(11) NOT NULL,
  `categoryId` varchar(127) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `MapEntry` (
  `mapCode` int(11) NOT NULL,
  `dateAdded` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


ALTER TABLE `AttributeValues`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `MapAttributes`
  ADD PRIMARY KEY (`mapCode`,`attrId`);


ALTER TABLE `AttributeValues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
