
   
package com.indracompany.treinamento.model.dto;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.Data;

@Data
public class ExtratoDTO implements Serializable{

	
	private static final long serialVersionUID = -6013344951312243904L;
	
	private String agencia;
	private String numeroConta;
	private LocalDate dtInicio;
	private LocalDate dtFim;
	
}