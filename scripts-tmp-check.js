const sharp = require('sharp');
async function check(file) {
  const trimmed = await sharp(file).trim({ background: '#00000000', threshold: 10 }).toBuffer({ resolveWithObject: true });
  console.log(file, 'content bbox:', trimmed.info.width, trimmed.info.height, 'trimOffset', trimmed.info.trimOffsetLeft, trimmed.info.trimOffsetTop);
}
(async () => {
  await check('public/images/gold.png');
  await check('public/images/navy.png');
})();
