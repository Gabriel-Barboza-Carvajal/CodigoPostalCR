/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo.dao;

/**
 *
 * @author gabri
 */
class lineaDatos {
    public int provincia,canton,distrito,seq_distrito;
    public String nombre;
    public lineaDatos(int provincia, int canton, int distrito, int seq_distrito, String nombre) {
        this.provincia = provincia;
        this.canton = canton;
        this.distrito = distrito;
        this.seq_distrito = seq_distrito;
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "lineaDatos{" + "provincia=" + provincia + ", canton=" + canton + ", distrito=" + distrito + ", seq_distrito=" + seq_distrito + ", nombre=" + nombre + '}';
    }

    public int getProvincia() {
        return provincia;
    }

    public void setProvincia(int provincia) {
        this.provincia = provincia;
    }

    public int getCanton() {
        return canton;
    }

    public void setCanton(int canton) {
        this.canton = canton;
    }

    public int getDistrito() {
        return distrito;
    }

    public void setDistrito(int distrito) {
        this.distrito = distrito;
    }

    public int getSeq_distrito() {
        return seq_distrito;
    }

    public void setSeq_distrito(int seq_distrito) {
        this.seq_distrito = seq_distrito;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
}
