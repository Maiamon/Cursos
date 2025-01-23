import { Readable } from 'stream'

class OneToHundredStream extends Readable {
  index = 1
  
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
        console.log(`Sending chunk: ${buf.toString()}`)
        this.push(buf)
      }
    }, 200)
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  duplex: 'half',
  body: new OneToHundredStream(),
}).then(response => {
  return response.text()
}).then(data => {
  console.log(data)
})