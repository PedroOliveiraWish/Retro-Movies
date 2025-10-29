import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())

const TOKEN_ACCESS = process.env.TOKEN_ACCESS;
const API_KEY = process.env.API_KEY;

app.get('/api/filme', async (req, res) => {

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`, {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        })

        const data = await response.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({
            error: 'Falha na comunicação com a API de Filmes.'
        });
    }
})

app.get('/api/genero', async (req, res) => {

    if (!API_KEY || !TOKEN_ACCESS) {
        return res.status(500).json({ error: "Chave API não configurada" })
    }

    try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=pt-BR`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN_ACCESS}`
            }
        })

        const data = await response.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({
            error: 'Falha na comunicação com a API de Filmes.'
        });
    }
})

app.listen(3001, () => {
    console.log(`🚀 Servidor Proxy rodando em http://localhost:${3001}`);
})