class Api::EventCategoriesController < ApplicationController

    def index
        render json: EventCategory.all, status: :ok
    end

    def create
        render json: EventCategory.create(category_params), status: :created
    end

    def show 
        render json: EventCategory.find(params[:id]), status: :ok
    end

    private 

    def category_params
        params.permit(:img_url, :category)
    end
end
