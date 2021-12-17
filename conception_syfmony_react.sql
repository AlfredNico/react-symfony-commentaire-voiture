-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 17 déc. 2021 à 06:27
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `conception_syfmony_react`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `_article_id` int(11) NOT NULL,
  `user_id` binary(16) NOT NULL COMMENT '(DC2Type:uuid)',
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`_article_id`, `user_id`, `title`, `image_url`, `created_at`, `updated_at`) VALUES
(31, 0x8aaf02735ef211eca124ac811247b0ca, 'voiture 1', 'uploads_image/image_0.jpeg', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(32, 0x8aaf02735ef211eca124ac811247b0ca, 'voiture 2', 'uploads_image/image_1.jpeg', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(33, 0x8aaf02735ef211eca124ac811247b0ca, 'voiture 3', 'uploads_image/image_2.jpeg', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(34, 0x8aaf02735ef211eca124ac811247b0ca, 'voiture 4', 'uploads_image/image_3.jpeg', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(35, 0x8aaf02735ef211eca124ac811247b0ca, 'voiture 5', 'uploads_image/image_4.jpeg', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(36, 0x8aaf02735ef211eca124ac811247b0ca, 'voiture 6', 'uploads_image/image_5.jpeg', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(37, 0x8aaf02735ef211eca124ac811247b0ca, 'voiture 7', 'uploads_image/image_6.jpeg', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(38, 0x8aaf02735ef211eca124ac811247b0ca, 'voiture 8', 'uploads_image/image_7.jpeg', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(39, 0x8aaf02735ef211eca124ac811247b0ca, 'voiture 9', 'uploads_image/image_8.jpeg', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(40, 0x8aaf02735ef211eca124ac811247b0ca, 'voiture 10', 'uploads_image/image_9.jpeg', '2021-12-17 06:33:54', '2021-12-17 06:33:54');

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `_comment_id` binary(16) NOT NULL COMMENT '(DC2Type:uuid)',
  `article_id` int(11) NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`_comment_id`, `article_id`, `description`, `created_at`, `updated_at`) VALUES
(0x8aca6a975ef211eca124ac811247b0ca, 31, 'description 0', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(0x8aca75315ef211eca124ac811247b0ca, 37, 'description 1', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(0x8aca7e425ef211eca124ac811247b0ca, 35, 'description 2', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(0x8aca86605ef211eca124ac811247b0ca, 36, 'description 3', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(0x8aca8ef35ef211eca124ac811247b0ca, 40, 'description 4', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(0x8aca97c55ef211eca124ac811247b0ca, 40, 'description 5', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(0x8acaa0de5ef211eca124ac811247b0ca, 32, 'description 6', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(0x8acaa7a65ef211eca124ac811247b0ca, 36, 'description 7', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(0x8acaae615ef211eca124ac811247b0ca, 33, 'description 8', '2021-12-17 06:33:54', '2021-12-17 06:33:54'),
(0x8acab5e55ef211eca124ac811247b0ca, 31, 'description 9', '2021-12-17 06:33:54', '2021-12-17 06:33:54');

-- --------------------------------------------------------

--
-- Structure de la table `refresh_tokens`
--

CREATE TABLE `refresh_tokens` (
  `id` int(11) NOT NULL,
  `refresh_token` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `_user_id` binary(16) NOT NULL COMMENT '(DC2Type:uuid)',
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`_user_id`, `email`, `user_roles`, `password`, `created_at`, `updated_at`) VALUES
(0x8aaf02735ef211eca124ac811247b0ca, 'zaho@zaho.fr', '[\"ROLE_USER\"]', '$2y$13$9ORw2/LxBXWJHPXdFungduVY3cYX3jqeQ4nY16dRts91w4WmHffpC', '2021-12-17 06:33:54', '2021-12-17 06:33:54');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`_article_id`),
  ADD KEY `IDX_BFDD3168A76ED395` (`user_id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`_comment_id`),
  ADD KEY `IDX_5F9E962A7294869C` (`article_id`);

--
-- Index pour la table `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_9BACE7E1C74F2195` (`refresh_token`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`_user_id`),
  ADD UNIQUE KEY `UNIQ_1483A5E9E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `_article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `FK_BFDD3168A76ED395` FOREIGN KEY (`user_id`) REFERENCES `users` (`_user_id`);

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_5F9E962A7294869C` FOREIGN KEY (`article_id`) REFERENCES `articles` (`_article_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
