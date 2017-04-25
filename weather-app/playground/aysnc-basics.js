console.log('Starting App');
setTimeout(() => {
  console.log('Inside set time out 2000');
}, 2000);
setTimeout(() => {
  console.log('Inside set time out 3000');
}, 3000);
setTimeout(() => {
  console.log('Calling zero');
}, 0);
setTimeout(() => {
  console.log('Calling zero 2');
}, 0);
console.log('Finishing App');
setTimeout(() => {
  console.log('Inside set time out 1000');
}, 1000);
