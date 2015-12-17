//Leying_Hu_ACI_Final
////////////////////////////////
a = Knot({ scale:3 }).spin(1/12)
b = Pixellate()
b.amount = 5
////////////////////////////////
c = Pluck().note.seq([80, 100], 1/16).blend.seq(Rndf())
////////////////////////////////
Master.fadeOut(5)
Clock.rate = Line(1, .5, 5)
////////////////////////////////
d = Canvas()
var rotation = 0
var count = 0
d.draw = function() {
  d.fade(.1)
  rotation += .05
  d.rotate( rotation )
  if (count == 0){
    d.polygon( d.center.x, d.center.y, 450, 3).stroke( 'black', 10 )
    count++;
  }
  else{
    d.polygon( d.center.x, d.center.y, 450, 3).stroke( 'white', 10 )
    count--;
  }
}
////////////////////////////////
e = FM( 'stabs' ).chord.seq( Rndi(3,5,7), [1/4,1/8,1/2].rnd() )
e = []
////////////////////////////////
f = Drums('-oxx-ox*')
f.fx.add( Distortion(100), Flanger() )
f.fx.remove()
////////////////////////////////
g = Synth().note.seq( [1, 6, 5, 2, 3, 4, 3, 1, 2, 1], [1/6, 1/6, 1/2, 1/8, 1/8, 1/8, 1/2, 1/6, 1/6, 1/2] )
h = Crush({ bitDepth:2 })
g.fx.add( h, Reverb() )
g.fx.remove()
g = []
h = []
////////////////////////////////
i = Stripes()
i.xCount = f.Out
k = Focus()
k.sampleDistance = f.Out
l = Kaleidoscope()
l.update = function() {this.angle += 1}
////////////////////////////////
m = SoundFont('piano')
m.note.seq([3, 2, 1], 1/2)
