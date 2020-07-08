//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (codon) => {
  let proteins = []
  if (!codon) return proteins
  if (codon.length % 3 !== 0) throw new Error('Invalid codon')
  let numOfCodons = codon.length / 3
  let arr = []

  for (let i = 0; i < numOfCodons; i++) {
    arr.push(codon.slice(i*3,i*3+3))
  }
  
  for (let i = 0; i < arr.length; i++) {
    if(!HASH[arr[i]]) throw new Error('Invalid codon')
    if(HASH[arr[i]] === 'STOP') break
    proteins.push(HASH[arr[i]])
  }
  return proteins
};

const HASH = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP'
}