package main

import (
    "log"

	"github.com/gofiber/fiber/v2"
)

func main() {
    app := fiber.New()

    app.Get("/", func (c *fiber.Ctx) error {
        return c.SendString("container-apps-cicd-examples-azure-devops")
    })

    log.Fatal(app.Listen(":3000"))
}