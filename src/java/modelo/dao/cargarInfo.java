/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo.dao;

import datos.BaseDatos;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Properties;

/**
 *
 * @author gabri
 */
public class cargarInfo {
      public Connection obtenerConexion() throws
            ClassNotFoundException,
            IllegalAccessException,
            InstantiationException,
            IOException,
            SQLException {
        BaseDatos bd = BaseDatos.obtenerInstancia();
        Properties cfg = bd.obtenerConfiguracion();
        Connection cnx = bd.obtenerConexion(
                cfg.getProperty("database"),
                cfg.getProperty("user"),
                cfg.getProperty("password")
        );
        return cnx;
    }
      
      private final String CMD_LISTAR =
              "SELECT * FROM division_politica.division;"
              ;
      
      public ArrayList<lineaDatos> recuperarDatos()
      {
        
        ArrayList<lineaDatos> r = new ArrayList<>();
        try (Connection cnx = obtenerConexion();
                Statement stm = cnx.createStatement();
                ResultSet rs = stm.executeQuery(CMD_LISTAR)) {
            while (rs.next()) {
                lineaDatos e = new lineaDatos(
                        Integer.parseInt(rs.getString("provincia")),
                        Integer.parseInt(rs.getString("canton")),                        
                        Integer.parseInt(rs.getString("distrito")),                        
                        Integer.parseInt(rs.getString("seq_distrito")),                        
                        rs.getString("nombre")
                )
                ;

                r.add(e);
            }
        } catch (IOException
                | ClassNotFoundException
                | IllegalAccessException
                | InstantiationException
                | SQLException ex) {
            System.err.printf("Excepción: '%s'%n", ex.getMessage());
        }
        return r;
    
      }
      public static void main(String[] args) {
          cargarInfo se=new cargarInfo();
          
          ArrayList<lineaDatos> lis=se.recuperarDatos();
          
          for (lineaDatos li : lis) {
              System.out.println(li.toString());
          }
          System.out.println("Tamaño : "+lis.size());
      }
}
