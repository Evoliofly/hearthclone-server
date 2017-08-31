const Minion = require('./minion')

class Battlefield{
	constructor(player){
		this.player = player
		this.minions = []
	}

	newMinion(player, minion){
		if (this.minions.length > 6)
			throw new Error('Battlefield already full.')
		this.minions.push(new Minion(player, minion))
	}

	removeMinion(minion){
		this.minions.splice(this.minions.indexOf(minion), 1)
	}

	destroyAllMinions(){
		this.minions.forEach(minion => minion.destory())
	}

	get spellPower(){
		this.minions.reduce(
			(sum, minion) => sum + (minion.card.spellPower ? minion.card.spellPower : 0), 0)
	}

	getMinionByIndex(n){
		if (typeof this.minions[n] === 'undefined')
			throw new Error('Index out of range.')
		return this.minions[n]
	}

	status(){
		return this.minions.map(minion => minion.status()).join('\n////////////\n')
	}
}

module.exports = Battlefield