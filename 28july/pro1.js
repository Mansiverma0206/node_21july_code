class ABC
{
   constructor(a,b)
   {
      this.a = a
      this.b = b
   }
   show(){
      console.log("A :", this.a , "B :",this.b )
   }
}

class XYZ extends ABC
{
   
   constructor(a,b,x,y)
   {
      super(a,b)
      this.x = x
      this.y = y
   }
   show(){
      super.show()
      console.log("X :", this.x , "Y :",this.y )
   }
}

var ob1 = new XYZ(11,22,44,55)
ob1.show()

const add=()=>{}
