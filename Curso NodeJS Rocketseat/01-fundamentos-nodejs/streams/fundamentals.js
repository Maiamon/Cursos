// Netflix & Spotify

// Importação de cliente via CSV (Excel)
// 1gb - 1.000.000
// POST /upload import.csv

// 10mb/s - 100s

// 100s -> Inserções no banco de dados

// 10mb/s -> 10.000 linhas

// Readable Streams / Writable Streams

// Streams ->

// process.stdin
//   .pipe(process.stdout)

import {Readable, Writable, Transform} from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1
  
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        this.push(Buffer.from(String(i)))
      }
    }, 500)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())
