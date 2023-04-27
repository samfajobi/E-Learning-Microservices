const amqp = require("amqplib")
const config = require("../config")







// -----------------  Message Broker ------------------


     // Steps in producing a message to RabbitMQ

// Connect to the RabbitMQ Server
// Create a new channel on that connection
// Create the Exchange
// Publish the message to the exchange with a routing key


class Producer {

    channel: any;

    async createChannel() {
        const connection = await amqp.connect(config.rabbitmq.url)
        this.channel = connection.createChannel();
    }

    async PublishMessage(routingKey: String, message: String) {
        if(!this.channel) {
            this.channel.createChannel();
        }

        await this.channel.assertExchange('direct', {})
    }



}