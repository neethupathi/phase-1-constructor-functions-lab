function Scooter(year,color,model)
{
this.year=year;
this.color=color;
this.model=model;
}
const scooter=new Scooter(2015,red,swoosh);
function Driver(name,age,experience)
{
    this.name=name;
    this.age=age;
    this.experience=experience;
}
const dri=new Driver(Allison,"16 years","2 years");
function PickupLocation(address,city)
{
    this.address=address;
    this.city=city;
}
const pick=new PickupLocation("123 Broadway", "New York City");