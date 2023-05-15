const shorten = (title)=>{
const shortTitle = title.split(" ");
const newTitle =`${shortTitle[0]} ${shortTitle[1]}`
return newTitle;
}
export {shorten};
