package com.indracompany.treinamento.model.dto;

import java.io.Serializable;
import java.time.LocalDateTime;

import lombok.Data;

@Data
public class OperacaoContaDTO implements Serializable{
	
	
	private static final long serialVersionUID = -4157528426695761097L;
	
	private LocalDateTime dataHora;
	private double valor;
	private char tpOperacao;
	private String observacao;

}
