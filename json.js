// const user = {id:101, name:'juyel', job:'devoloper'}
// const stringlyfyed = JSON.stringify(user)
// console.log(user)
// console.log(stringlyfyed)

const user = {
    name:'mama',
    location:'dhaka',
    product:{
        tv:'led',
        wage:'manik',

    },
    point: ['laptop','moblie','tv']
}

console.log(user);
const userSide = JSON.stringify(user);
console.log(userSide);
const parseObject = JSON.parse(userSide);
console.log(parseObject)