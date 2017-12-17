class ApplicationMailer < ActionMailer::Base
  default from: 'mailerbot@microservice.com'
  layout 'mailer'
end
