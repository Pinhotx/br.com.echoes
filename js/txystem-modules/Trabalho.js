class Trabalho {
  constructor(nome, data, img, desc) {
    this.nome = nome;
    this.data = data;
    this.img = img;
    this.desc = desc;
  }

  saveJob(){
    var query = "INSERT INTO"
    abrirBanco();

  }

  getNome(){
    return this.nome;
  }

  setNome(nome){
    this.nome = nome;
  }
  getData(){
    return this.data;
  }

  setData(data){
    this.data = data;
  }
  getImg(){
    return this.img;
  }

  setImg(img){
    this.img = img;
  }
  getDesc(){
    return this.desc;
  }

  setDesc(desc){
    this.desc = desc;
  }


}
