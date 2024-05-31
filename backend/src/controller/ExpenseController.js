import express from 'express'

const { Request, Response } = express

class ExpenseController {
  async find(req = Request, res = Response) {
    try {
    } catch (error) {
      return res.status(500).json({
        message: `Something wrong happend, try again: ${error}`,
      })
    }
  }

  async create(req = Request, res = Response) {
    try {
    } catch (error) {
      return res.status(500).json({
        message: `Registratio failed: ${error}`,
      })
    }
  }

  async put(req = Request, res = Response) {
    try {
    } catch (error) {
      return res.status(500).json({
        message: `Something wrong happend, try again: ${error}`,
      })
    }
  }

  async delete(req = Request, res = Response) {
    try {
    } catch (error) {
      return res.status(500).json({
        message: `Something wrong happend, try again: ${error}`,
      })
    }
  }
}

export default new ExpenseController()
