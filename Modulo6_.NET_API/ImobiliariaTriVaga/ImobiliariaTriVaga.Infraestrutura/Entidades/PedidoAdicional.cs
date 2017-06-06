﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImobiliariaTriVaga.Infraestrutura.Entidades
{
    public class PedidoAdicional
    {
        public int Id { get; set; }

        public int IdPedido { get; set; }

        public Pedido Pedido { get; set; }  

        public int IdAdicional { get; set; }

        public Adicional Adicional { get; set; }

        public int Quantidade { get; set; }
    }
}
