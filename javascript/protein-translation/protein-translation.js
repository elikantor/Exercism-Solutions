//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  let proteins = []
  if (!rna) return proteins
  if (rna.length % 3 !== 0) throw new Error('Invalid codon')
  let numOfCodons = rna.length / 3

  for (let i = 0; i < numOfCodons; i++) {
    proteins.push(rna.slice(i*3,i*3+3))
  }
  
  for (let i = 0; i < proteins.length; i++) {
    if(!HASH[proteins[i]]) throw new Error('Invalid codon')
    if(HASH[proteins[i]] === 'STOP') return proteins.slice(0,i)
    proteins[i] = HASH[proteins[i]]
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