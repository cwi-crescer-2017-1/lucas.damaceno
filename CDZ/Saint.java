import java.security.InvalidParameterException;
import java.util.*;
// Classe Saint (Cavaleirxs que entregam justiça cósmica.)
public abstract class Saint {
    public String nome;
    private int id;
    protected Armadura armadura;
    protected boolean armaduraVestida;
    protected Genero genero=Genero.NAO_INFORMADO;
    protected Status status=Status.VIVO;
    protected double vida = 100.0;
    protected int qtdSentidosDespertados;
    protected Categoria categoria;
    protected ArrayList<Movimento> movimentos = new ArrayList<>();
    private int acumuladorProximoMovimento=0;
    private static int qtdSaints = 0, acumuladorQtdSaints=0;
    protected boolean vaiBloquearProximoAtaque;
    // Construtor da classe Saint
    protected Saint(String nome, String constelacao) throws Exception{
        this.armadura = new Armadura(new Constelacao(constelacao), this.categoria);
        this.nome=nome;
        Saint.qtdSaints++;
        Saint.acumuladorQtdSaints++;
        this.id = Saint.getAcumuladorQtdSaints();
    }
    
    protected void finalize() throws Throwable{
        Saint.qtdSaints--;    
    }

    public static int getQtdSaints(){
        return Saint.qtdSaints;
    }
    public static int getAcumuladorQtdSaints(){
        return Saint.acumuladorQtdSaints;
    }

    public String getNome(){
        return this.nome;
    }
    // Método para vestir armadura do Saint.    
    public void vestirArmadura(){
        this.armaduraVestida = true;
    }
    // Método para despir armadura do Saint.
    public void despirArmadura(){
        this.armaduraVestida = false;
    }
    // Método para checar se Saint esta com armadura vestida.
    public boolean getArmaduraVestida(){
        return this.armaduraVestida;
    }
    // Método para checar gênero do Saint.
    public Genero getGenero(){
        return this.genero;
    }
    // Método para alterar gênero do Saint.
    public void setGenero(Genero genero){
        this.genero=genero;
    }
    // Método para retornar Status do saint.
    public Status getStatus(){
        return this.status;
    }
    // Método para alterar Categoria da armadura do Saint.
    abstract void setCategoria();
    // Metodo que causa dano no Saint.
    public void perderVida(double dano) {
        if (dano < 0){
            throw new InvalidParameterException ("Invalid Parameter Exception");
        }
        else if((this.vida) > 1){
            this.vida -= dano;
            if (this.vida < 1) {
                this.vida=0;
                this.status = Status.MORTO;
            }
        }
    }

    // Metodo que retorna a vida atual do Saint.
    public double getVida(){
        return this.vida;
    }

    // Metodo que retorna o valor numerico da Categoria da Armadura do Saint (Ex: Ouro 3, Prata 2, Bronze 1)
    public int getCategoriaArmadura(){
        return this.armadura.getValorCategoria();
    }

    public String getNomeConstelacao(){
        return this.armadura.getNomeConstelacao();
    }

    @Override
    public String toString() {
        return nome + " de " +  getNomeConstelacao();
    }

    public int getQtdSentidosDespertados(){
        return this.qtdSentidosDespertados;
    }

    public ArrayList getGolpes(){
        return this.armadura.getGolpes();
    }

    public void aprenderGolpe(Golpe golpe){
        this.armadura.aprenderGolpe(golpe);
    }

    public Golpe getProximoGolpe() throws Exception{
        return this.armadura.getProximoGolpe();
    }

    public Armadura getArmadura(){
        return this.armadura;
    }

    public String getCSV(){
        StringBuilder csv = new StringBuilder(512);
        csv.append(this.getNome())
        .append(",")
        .append(this.getVida())
        .append(",")
        .append(this.getNomeConstelacao())
        .append(",")
        .append(this.getArmadura().getCategoria())
        .append(",")
        .append(this.getStatus())
        .append(",")
        .append(this.getGenero())
        .append(",")
        .append(this.getArmaduraVestida());
        return csv.toString();
    }

    public void adicionarMovimento(Movimento movimento){
        this.movimentos.add(movimento);
    }

    public Movimento getProximoMovimento()throws Exception{
        if(movimentos.get(0) == null) throw new Exception("Array não-populado"); 
        int posicao = acumuladorProximoMovimento % movimentos.size();
        this.acumuladorProximoMovimento++;
        return movimentos.get(posicao);
    }

    public int getTamanhoDaListaDeMovimentos(){
        return this.movimentos.size();
    }
    //Agendando execuç~ão do golpe no Saint passado por paramêtro
    //Golpe so sera executado, de fato, na batalha.
    public void golpear(Saint golpeado)throws Exception{
        this.adicionarMovimento(new Golpear(this, golpeado));
    }

    public int getSaintId(){
        return this.id;
    }

    public boolean equals (Object object) {
        Saint saint = (Saint)object;
        if (saint.getNome().equals(this.nome) && saint.getNomeConstelacao().equals(this.getNomeConstelacao()))  return true;

        return false;
    }

}
