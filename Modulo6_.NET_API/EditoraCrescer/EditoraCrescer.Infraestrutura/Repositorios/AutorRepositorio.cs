﻿using EditoraCrescer.Infraestrutura.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EditoraCrescer.Infraestrutura.Repositorios
{
    public class AutorRepositorio : IDisposable
    {

        private Contexto contexto = new Contexto();

        public AutorRepositorio()
        {



        }

        public bool AutorValido(int id)
        {
            return contexto.Autores.Where(x => x.Id == id).Count() > 0;
        }

        public List<Autor> Obter()
        {
            return contexto.Autores.ToList();
        }

        public Autor Obter(int id)
        {
            return contexto.Autores.Where(x => x.Id == id).FirstOrDefault();
        }

        public List<Livro> ObterLivrosDoAutor(int id)
        {
            return contexto.Livros.Where(x => x.IdAutor == id).ToList();
        }

        public void Criar(Autor autor)
        {

            contexto.Autores.Add(autor);
            contexto.SaveChanges();
        }

        public Autor Modificar(int id, Autor autorModificado)
        {       

            Autor autorOriginal = contexto.Autores.Where(x => x.Id == id).FirstOrDefault();
            autorModificado.Id = id;
            contexto.Entry(autorOriginal).CurrentValues.SetValues(autorModificado);
            contexto.SaveChanges();
            return autorModificado; 
        }

        public void Deletar(int id)
        {
            Autor autorRemover = contexto.Autores.FirstOrDefault(x => x.Id == id);
            contexto.Autores.Remove(autorRemover);
            contexto.SaveChanges();

        }

        public void Dispose()
        {
            contexto.Dispose();

        }

    }
}
