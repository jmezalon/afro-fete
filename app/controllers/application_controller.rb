class ApplicationController < ActionController::API
    include ActionController::Cookies  
    before_action :authorize
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    private

    def authorize
        render json: { error: "Not authorized" }, status: :unauthorized unless current_user
    end

    def render_not_found
        render json: { error: "Not found" }, status: :not_found
    end

    def render_invalid(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def current_user
        @current_user ||= User.find_by_id(session[:user_id])
    end

end
