CREATE DATABASE IF NOT EXISTS im_test;

use im_test;

CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `accid` varchar NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT '',
  `email` varchar(255) DEFAULT '',
  `mobile` varchar(255) DEFAULT '',
  `gender` tinyint(1) DEFAULT 0,
  `compony` varchar(255) DEFAULT '',
  `department` varchar(255) DEFAULT '',
  `role` varchar(255) DEFAULT 'user',
  `is_deleted` tinyint(1) DEFAULT 0,
  `deleted_at` datetime DEFAULT "1970-01-01 00:00:00",
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;