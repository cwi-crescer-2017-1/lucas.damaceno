public class Constelacao{
    private String nome;
    private Golpe[] meusGolpes = new Golpe[3];
    private int indiceAPopular = 0;
    public Constelacao(String nome){
    this.nome = nome;
    }
    public void aprenderGolpe(Golpe golpe){
        meusGolpes[indiceAPopular] = golpe;
        if(indiceAPopular<2){
        this.indiceAPopular++;
        }
    }
    public String getNomeConstelacao(){
        return this.nome;
    }

}