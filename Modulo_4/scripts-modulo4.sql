-- MySQL Script generated by MySQL Workbench
-- Fri Mar  3 11:30:49 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `Aluno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aluno` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Aluno` (
  `idAluno` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `matricula` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `endereco` VARCHAR(100) NOT NULL,
  `Turma_idTurma` INT NOT NULL,
  PRIMARY KEY (`idAluno`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Aluno_has_Curso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Aluno_has_Curso` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Aluno_has_Curso` (
  `Aluno_idAluno` INT NOT NULL,
  `Curso_idCurso` INT NOT NULL,
  PRIMARY KEY (`Aluno_idAluno`, `Curso_idCurso`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Curso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Curso` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Curso` (
  `idCurso` INT NOT NULL,
  `nome` VARCHAR(100) NOT NULL,
  `horario` DATETIME NOT NULL,
  `conteudo` VARCHAR(100) NULL,
  `cargaHoraria` VARCHAR(45) NULL,
  `dia` VARCHAR(45) NULL,
  PRIMARY KEY (`idCurso`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Curso_has_Unidade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Curso_has_Unidade` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Curso_has_Unidade` (
  `Curso_idCurso` INT NOT NULL,
  `Unidade_idUnidade` INT NOT NULL,
  PRIMARY KEY (`Curso_idCurso`, `Unidade_idUnidade`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Professor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Professor` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Professor` (
  `idProfessor` INT NOT NULL,
  `nome` VARCHAR(100) NOT NULL,
  `matricula` VARCHAR(45) NOT NULL,
  `horarioEntrada` DATETIME NOT NULL,
  `horarioSaida` DATETIME NOT NULL,
  `cargaHoraria` DOUBLE NOT NULL,
  `diaMês` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idProfessor`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Sala`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Sala` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Sala` (
  `idSala` INT NOT NULL,
  `horario` DATETIME NULL,
  `Curso_idCurso` INT NOT NULL,
  `Unidade_idUnidade` INT NOT NULL,
  PRIMARY KEY (`idSala`, `Curso_idCurso`, `Unidade_idUnidade`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Turma`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Turma` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Turma` (
  `idTurma` INT NOT NULL,
  `horarioEntrada` DATETIME NULL,
  `horarioSaida` DATETIME NULL,
  PRIMARY KEY (`idTurma`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Turma_has_Professor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Turma_has_Professor` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Turma_has_Professor` (
  `Turma_idTurma` INT NOT NULL,
  `Professor_idProfessor` INT NOT NULL,
  PRIMARY KEY (`Turma_idTurma`, `Professor_idProfessor`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `Unidade`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Unidade` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `Unidade` (
  `idUnidade` INT NULL,
  `endereco` VARCHAR(100) NULL,
  `nome` VARCHAR(100) NULL,
  `Professor_idProfessor` INT NOT NULL,
  PRIMARY KEY (`idUnidade`))
ENGINE = InnoDB;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;