package br.edu.uni7.tecnicasapp1.model;

public class Servicos {

    private Integer identificador;
    private float maoDeObra;
    private Integer pecasVendidas;
    private float precoTotal;

    public Integer getIdentificador() {
        return identificador;
    }

    public void setIdentificador(Integer identificador) {
        this.identificador = identificador;
    }

    public float getMaoDeObra() {
        return maoDeObra;
    }

    public void setMaoDeObra(float maoDeObra) {
        this.maoDeObra = maoDeObra;
    }

    public Integer getPecasVendidas() {
        return pecasVendidas;
    }

    public void setPecasVendidas(Integer pecasVendidas) {
        this.pecasVendidas = pecasVendidas;
    }

    public float getPrecoTotal() {
        return precoTotal;
    }

    public void setPrecoTotal(float precoTotal) {
        this.precoTotal = precoTotal;
    }
}
